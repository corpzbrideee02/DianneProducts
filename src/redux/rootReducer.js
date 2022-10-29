import productsReducer from "./productReducers";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

export default combineReducers({
cartReducer,
productsReducer
});