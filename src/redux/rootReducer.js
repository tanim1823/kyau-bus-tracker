import { combineReducers } from "redux";
import busReducer from "./busDetails/reducer";
import sensorDataReducer from "./sensorData/reducer";
const rootReducer = combineReducers({
  busDetails: busReducer,
  sensorData: sensorDataReducer,
});

export default rootReducer;
