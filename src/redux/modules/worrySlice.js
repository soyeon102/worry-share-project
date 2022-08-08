import { createSlice } from "@reduxjs/toolkit";

export const worrySlice = createSlice({
  name: "worry",
  initialState: {
    worrys: [],
  },
  reducers: {},
});

export default worrySlice.reducer;
