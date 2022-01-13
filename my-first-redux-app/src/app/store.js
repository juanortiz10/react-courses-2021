import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from "../redux/api/movies";
import moviesReducerSlice from "../redux/slices/movies";
import moviesReducer from "../redux/reducers/movies";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    moviesReducerSlice,
    moviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
