import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/GenreSlice";

export const store = configureStore({
  reducer: {
    genres: genresReducer,
  },
});
