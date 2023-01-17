import React, { useEffect, useState } from "react";
import ListComponent from "../../component/List";
import { connect } from "react-redux";
import { addData, deleteData, editData, fetch } from "./actions";
import { compose } from "redux";
import homeReducer from "./reducer";
import homeSaga from "./saga";
import withReducer from "../../hocs/withReducer";
import withSaga from "../../hocs/withSaga";

const HomePage = ({ data, isLoading, onFetch, onDelete, onEdit, onAdd }) => {
  useEffect(() => {
    onFetch();
  }, []);

  return (
    <ListComponent
      dataSource={data?.items}
      loading={isLoading}
      onDeleteData={onDelete}
      onEditData={onEdit}
      onAddData={onAdd}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    data: state?.homeReducer?.data,
    isLoading: state?.homeReducer?.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => dispatch(fetch()),
    onDelete: (id) => dispatch(deleteData(id)),
    onEdit: (item) => dispatch(editData(item)),
    onAdd: (item) => dispatch(addData(item)),
  };
};

export default compose(
  withReducer("homeReducer", homeReducer),
  withSaga("homeSaga", homeSaga),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
