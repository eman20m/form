import * as TYPES from "../types/counter";

const INITIAL_STATE = {
  counter: 0,
  length:0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };
    
    default:
      return state;
  }
};
