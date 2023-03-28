import { ADDED } from "./actionType";

export const added = (busDetails) => {
  return {
    type: ADDED,
    payload: busDetails,
  };
};
