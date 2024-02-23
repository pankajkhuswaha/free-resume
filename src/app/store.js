import { configureStore } from "@reduxjs/toolkit";
import authslice from "../feature/authslice";

export const store = configureStore({
  reducer: {
    auth:authslice
  },
});
