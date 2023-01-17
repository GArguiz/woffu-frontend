import { takeEvery, all, call, put, select } from "redux-saga/effects";
import {
  ADD_DATA_FAILED,
  ADD_DATA_REQUESTED,
  ADD_DATA_SUCCESS,
  DELETE_DATA_FAILED,
  DELETE_DATA_REQUESTED,
  DELETE_DATA_SUCCESS,
  EDIT_DATA_FAILED,
  EDIT_DATA_REQUESTED,
  EDIT_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  FETCH_DATA_REQUESTED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
} from "../../constants";
import { api } from "../../api";

export function* fetchDataSaga() {
  let isLoading = yield select((state) => state.homeReducer.isLoading);
  if (!isLoading) {
    yield put({ type: FETCH_DATA_START });
    const { status, data, message } = yield call(api.getAllData);
    if (status === 200) {
      yield put({
        type: FETCH_DATA_SUCCESS,
        payload: data,
      });
    } else {
      yield put({
        type: FETCH_DATA_FAILED,
        payload: { message, status },
      });
    }
  }
}

export function* editDataSaga({ payload }) {
  yield put({ type: FETCH_DATA_START });
  const { status, message } = yield call(api.editData, payload);
  if (status >= 200 && status < 300) {
    yield put({ type: EDIT_DATA_SUCCESS });
    yield call(fetchDataSaga);
  } else {
    yield put({
      type: EDIT_DATA_FAILED,
      payload: { message, status },
    });
  }
}

export function* addDataSaga({ payload }) {
  yield put({ type: FETCH_DATA_START });
  const { status, message } = yield call(api.addData, payload);
  if (status >= 200 && status < 300) {
    yield put({ type: ADD_DATA_SUCCESS });
    yield call(fetchDataSaga);
  } else {
    yield put({
      type: ADD_DATA_FAILED,
      payload: { message, status },
    });
  }
}

export function* deleteDataSaga({ payload }) {
  yield put({ type: FETCH_DATA_START });
  const { status, message } = yield call(api.deleteData, payload);
  if (status >= 200 && status < 300) {
    yield put({ type: DELETE_DATA_SUCCESS });
    yield call(fetchDataSaga);
  } else {
    yield put({
      type: DELETE_DATA_FAILED,
      payload: { message, status },
    });
  }
}

export function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUESTED, fetchDataSaga);
}
export function* watchAddData() {
  yield takeEvery(ADD_DATA_REQUESTED, addDataSaga);
}
export function* watchEditData() {
  yield takeEvery(EDIT_DATA_REQUESTED, editDataSaga);
}
export function* watchDeleteData() {
  yield takeEvery(DELETE_DATA_REQUESTED, deleteDataSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchData(),
    watchDeleteData(),
    watchEditData(),
    watchAddData(),
  ]);
}
