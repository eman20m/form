import { combineReducers } from "redux";
import count from "./counter";
import products from './product';

export default combineReducers({
  count,
  products
});
