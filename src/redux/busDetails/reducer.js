/** Iniial State */

import { ADDED } from "./actionType";

// initial state
const initialState = {
  id: "",
  title: "",
  image: "",
};

const busReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default busReducer;
