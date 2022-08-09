import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  worries: [],
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
  reducers: {
     addWorry: (state, action) => {
      return [...state, action.worry];
    },
    deleteWorry: (state, action) => {
      state.worrys = state.filter((worry) => worry.id !== action.id);
    },
  },
  extraReducers: {
    [__getWorries.fulfilled]: (state, action) => {
      console.log("fulfilled 상태", state, "action", action.payload)
    }
  }
})



export const { addWorry, deleteWorry } = worrySlice.actions;
export default worrySlice.reducer;
