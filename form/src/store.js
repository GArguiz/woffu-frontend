import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

export default function createStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    initialState,
    reducer: createReducer({
      root: rootReducer,
    }),
    middleware: [sagaMiddleware],
  });

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  store.injectSaga = createSagaInjector(sagaMiddleware.run);
  // Return the modified store
  return store;
}

function createReducer(asyncReducers) {
  return combineReducers({ ...asyncReducers });
}

function createSagaInjector(runSaga, rootSaga = null) {
  const injectedSagas = new Map();

  const isInjected = (key) => injectedSagas.has(key);

  const injectSaga = (key, saga) => {
    // We won't run saga if it is already injected
    if (isInjected(key)) return;

    // Sagas return task when they executed, which can be used
    // to cancel them
    const task = runSaga(saga);

    // Save the task if we want to cancel it in the future
    injectedSagas.set(key, task);
  };

  // Inject the root saga as it a staticlly loaded file,
  //   injectSaga("root", rootSaga);

  return injectSaga;
}
