import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./login.ts";
import { registerCall } from "./register.ts";
import { getAllProduct } from "./getAllproduct.ts";
import { searchApi } from "./search.ts";
import { deleteApi } from "./deliteBook.ts"; 
import { senBook } from "./sendBook.ts";
import storeReducer from "../../context/state.ts";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [registerCall.reducerPath]: registerCall.reducer,
    [getAllProduct.reducerPath]: getAllProduct.reducer,
    [senBook.reducerPath]: senBook.reducer,
    [deleteApi.reducerPath]: deleteApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    storeReducer: storeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddlewares = getDefaultMiddleware();
    return defaultMiddlewares.concat(
      loginApi.middleware,
      registerCall.middleware,
      senBook.middleware,
      searchApi.middleware,
      deleteApi.middleware,
      getAllProduct.middleware
    );
  },
});
