import React from "react";
import { ReactReduxContext } from "react-redux";

export const withSaga = (key, saga) => (WrappedComponent) => {
  class WithSaga extends React.Component {
    static WrappedComponent = WrappedComponent;
    componentDidMount() {
      const { store } = this.context;
      store.injectSaga(key, saga);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  WithSaga.contextType = ReactReduxContext;
  return WithSaga;
};

export default withSaga;
