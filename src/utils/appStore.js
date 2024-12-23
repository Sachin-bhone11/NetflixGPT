import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import movieReduser from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReduser,
    movies: movieReduser,
  },
});

export default appStore;
