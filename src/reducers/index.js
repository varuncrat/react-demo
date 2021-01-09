import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import timeSlots from "../containers/home/reducers";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    timeSlots,
  });

export default createRootReducer;
