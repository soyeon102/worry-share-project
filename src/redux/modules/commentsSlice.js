import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import { __deleteComments } from "./worrySlice";

const initialState = {
  comments: [1, 2],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comments");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  "comments/deleteComments",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const data = await axios.delete(
        `http://localhost:3001/comments/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, action) => {
      console.log("action.payload", action.payload);
      state.isLoading = false;
      state.comments = [...state.comments];
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
