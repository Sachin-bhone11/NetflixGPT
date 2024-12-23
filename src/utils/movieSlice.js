import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayinMovies: (state, action) => {
      state.nowPlaingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlayinMovies, addTrailerVideo } = movieSlice.actions;
