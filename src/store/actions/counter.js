import * as TYPES from "../types/counter";

export const setCounter = (payload) => ({
  type: TYPES.SET_COUNTER,
  payload,
});
