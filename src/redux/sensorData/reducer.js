import { LOADED } from "./actionType";
import initialState from "./initialState";

// Reducer Function
const sensorDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default sensorDataReducer;
