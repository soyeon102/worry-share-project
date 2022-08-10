import { configureStore } from "@reduxjs/toolkit";

import worrySlice from "../modules/worrySlice";
import commentsSlice from "../modules/commentsSlice";

export const store = configureStore({
  reducer: {
    worries: worrySlice,
    comments: commentsSlice,
  },
});
