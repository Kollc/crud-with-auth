import { rootReducer } from "./reducers/root-reducer";
import { createApi } from "./../services/api";
import { configureStore } from "@reduxjs/toolkit";

const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
