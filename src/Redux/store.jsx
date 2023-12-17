import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Reducers/ProductsSlice";

// ROOT REDUCER CONFIGURATION
export default configureStore({
  // Configuring the store with a reducer that handles productsData state
  reducer: {
    productsData: ProductsReducer, // Attaching the ProductsReducer to manage productsData state
  },
});
