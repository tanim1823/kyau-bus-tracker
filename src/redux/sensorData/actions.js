import { LOADED } from "./actionType";

// Actions
export const loaded = (mapDataFromCentre) => {
  return {
    type: LOADED,
    payload: mapDataFromCentre,
  };
};
