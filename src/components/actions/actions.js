import axios from "axios";
import store from "../../redux/store";
import { products } from "../../data";

//synchronous action creator
const fetchProductsSuccess = (products) => ({
  type: "FETCH_PRODUCTS_SUCCESS",
  payload: { products },
});

/*asynchronous thunk action creator calls the api, then dispatches the synchronous action creator*/
export const getProducts = () => {
  return async (dispatch) => {
    try {
      //let productsAll = await axios.get("randomProduct.json");
      dispatch(
        fetchProductsSuccess(products.splice(0, 10000))
      ); //store first 10,000 products, you can replace it with any number you wanted to return
    } catch (e) {
      console.log(e);
    }
  };
};

export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    products: store.getState().productsReducer,
    id,
  };
};

export const subtractQuantity = (id) => {
  return {
    type: "SUB_QUANTITY",
    products: store.getState().productsReducer,
    id,
  };
};

export const addQuantity = (id) => {
  return {
    type: "ADD_QUANTITY",
    products: store.getState().productsReducer,
    id,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_TO_CART",
    id,
  };
};
