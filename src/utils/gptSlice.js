import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchMovie: [],
  },
  reducers: {
    toggleShowGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
  },
});

export const { toggleShowGptSearch, addSearchMovie } = gptSlice.actions;
export default gptSlice.reducer;
