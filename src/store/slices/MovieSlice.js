import { createSlice } from "@reduxjs/toolkit";

const initialState = { info: null };

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovieInfo: (state, action) => {
      state.info = action.payload;
    },
    removeMovieInfo: (state) => {
      state.info = initialState.info;
    },
  },
});

export const { setMovieInfo, removeMovieInfo } = movieSlice.actions;
export default movieSlice.reducer;
