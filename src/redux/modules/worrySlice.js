import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const __deleteWorries = createAsyncThunk(
  "worries/deleteWorries",
  async (payload, thunkAPI) => {
    await axios.delete(`http://localhost:3001/worries/${payload}`);

    return payload;
  }
);

const initialState = {
  worries: [{ id: 1 }],
  isLoading: false,
  error: null,
  comments: [],
};

export const worrySlice = createSlice({
  name: "worry",
  initialState,
  reducers: {
    addWorry: (state, action) => {
      console.log("addWorries", state.worries);
      return [...state, action.worry];
    },
    deleteWorry: (state, action) => {
      console.log("deleteWorries", state.worries);
      state.worrys = state.filter((worry) => worry.id !== action.id);
    }, // ??
    updateWorry: (state, action) => {
      console.log("state", state.worries, "action", action);
    },
  },
  extraReducers: {
    [__getWorries.pending]: (state) => {
      state.isLoading = true;
    },
    [__getWorries.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.worries = action.payload;
    },
    [__getWorries.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteWorries.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteWorries.fulfilled]: (state, action) => {
      state.worries = state.worries.filter(
        (item) => item.id !== action.payload
      );
    },
    [__deleteWorries.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addWorry, deleteWorry, updateWorry } = worrySlice.actions;
export default worrySlice.reducer;
