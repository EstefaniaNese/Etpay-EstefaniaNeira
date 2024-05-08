import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slices/theme.slice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
