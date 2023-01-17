import {
  ADD_DATA_REQUESTED,
  DELETE_DATA_REQUESTED,
  EDIT_DATA_REQUESTED,
  FETCH_DATA_REQUESTED,
} from "../../constants";

export const fetch = () => ({
  type: FETCH_DATA_REQUESTED,
});

export const deleteData = (payload) => ({
  type: DELETE_DATA_REQUESTED,
  payload,
});

export const editData = (payload) => ({
  type: EDIT_DATA_REQUESTED,
  payload,
});

export const addData = (payload) => ({
  type: ADD_DATA_REQUESTED,
  payload,
});
