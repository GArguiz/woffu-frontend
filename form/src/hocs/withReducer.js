import React from "react";
import { ReactReduxContext } from "react-redux";

export const withReducer = (key, reducer) => (WrappedComponent) => {
  class WithReducer extends React.Component {
    static WrappedComponent = WrappedComponent;
    componentDidMount() {
      const { store } = this.context;
      store.injectReducer(key, reducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  WithReducer.contextType = ReactReduxContext;

  return WithReducer;
};

export default withReducer;
