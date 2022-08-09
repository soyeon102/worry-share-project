import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const __getWorries = createAsyncThunk(
  "worries/getWorries",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/worries");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const worrySlice = createSlice({
  name: "worry",
  initialState,
  reducers: {},
  extraReducers: {
    [__getWorries.fulfilled]: (state, action) => {
      console.log("fulfilled 상태", state, "action", action.payload);
    },
  },
});

export const {} = worrySlice.actions;
export default worrySlice.reducer;
