import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";
import worrySlice from "../modules/worrySlice";

export const store = configureStore({
  reducer: {
    worries: worrySlice,
    comments: commentsSlice,
  },
});
