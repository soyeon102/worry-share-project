import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://worry-share.herokuapp.com/comments"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addComment = createAsyncThunk(
  "commets/addComment",
  async (newComment) => {
    const data = await axios.post(
      "https://worry-share.herokuapp.com/comments",
      newComment
    );
    return data.data;
  }
);

export const __deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId) => {
    await axios.delete(
      `https://worry-share.herokuapp.com/comments/${commentId}`
    );
    return commentId;
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
    [__addComment.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    [__deleteComment.pending]: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (item) => item.id !== action.payload
      );
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
