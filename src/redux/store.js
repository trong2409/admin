import { configureStore } from "@reduxjs/toolkit";
import FileManagerSlice from "./FileManagerSlice";

export const store = configureStore({
  reducer: {
    FileManager : FileManagerSlice
  },
});
