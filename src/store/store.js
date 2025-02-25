import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./slices/GenreSlice";
import movieReducer from "./slices/MovieSlice";

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    movie: movieReducer,
  },
});
