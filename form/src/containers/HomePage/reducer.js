import { combineReducers } from "redux";
import {
  ADD_DATA_FAILED,
  ADD_DATA_SUCCESS,
  DELETE_DATA_FAILED,
  DELETE_DATA_REQUESTED,
  DELETE_DATA_SUCCESS,
  EDIT_DATA_FAILED,
  EDIT_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
} from "../../constants";

function dataReducer(state = { items: [] }, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return { ...state, items: action.payload };
    case FETCH_DATA_FAILED:
      const { status, message } = action.payload;
      return { ...state, items: [], errorStatus: status, message };
    case DELETE_DATA_FAILED:
    case EDIT_DATA_FAILED:
    case ADD_DATA_FAILED:
      return { ...state, errorStatus: status, message };
    default:
      return state;
  }
}

function dataLoadingReducer(state = false, action) {
  switch (action.type) {
    case DELETE_DATA_REQUESTED:
    case FETCH_DATA_START:
      return true;
    case FETCH_DATA_SUCCESS:
    case DELETE_DATA_SUCCESS:
    case EDIT_DATA_SUCCESS:
    case ADD_DATA_SUCCESS:
      return false;
    case FETCH_DATA_FAILED:
    case DELETE_DATA_FAILED:
    case EDIT_DATA_FAILED:
    case ADD_DATA_FAILED:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  data: dataReducer,
  isLoading: dataLoadingReducer,
});
