import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  worrys: [],
};

const worrySlice = createSlice({
  name: "worry",
  initialState,
  reducers: {
    addWorry: (state, action) => {
      return [...state, action.worry];
    },
    deleteWorry: (state, action) => {
      state.worrys = state.filter((worry) => worry.id !== action.id);
    },
  },
});

export const { addWorry, deleteWorry } = worrySlice.actions;
export default worrySlice.reducer;
