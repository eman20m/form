import * as TYPES from '../types/product';

export default (
  state = [],
  action
) => {
  switch (action.type) {
    case TYPES.SET_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
