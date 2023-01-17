import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import createStore from "../store";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = createStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...renderer(ui, { wrapper: Wrapper, ...renderOptions }) };
}
