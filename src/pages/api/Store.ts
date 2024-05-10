import { configureStore } from "@reduxjs/toolkit";
import { loginApi } from "./login.ts";
import { registerCall } from "./register.ts";
import { pokemonApi } from "./getAllproduct.ts";
import { searchApi } from "./search.ts";
import storeReducer from "../../context/state.ts";

export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [registerCall.reducerPath]: registerCall.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    storeReducer: storeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddlewares = getDefaultMiddleware();
    return defaultMiddlewares.concat(
      loginApi.middleware,
      registerCall.middleware,
      searchApi.middleware,
      pokemonApi.middleware
    );
  },
});
