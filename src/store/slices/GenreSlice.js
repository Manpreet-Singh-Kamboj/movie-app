import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
};

const genreSlice = createSlice({
  name: "genres",
  initialState: initialState,
  reducers: {
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { setGenres, getGenresFromIds } = genreSlice.actions;
export default genreSlice.reducer;
