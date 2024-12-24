import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./userSlice";
import movieReduser from "./movieSlice";
import gptReduser from "./gptSlice";
import configReduser from "./configSlice";
const appStore = configureStore({
  reducer: {
    config: configReduser,
    user: userReduser,
    movies: movieReduser,
    gpt: gptReduser,
  },
});

export default appStore;
