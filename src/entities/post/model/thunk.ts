import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPosts } from "../api/post-api";
import { PostModel } from "./types";

export const getPostsThunk = createAsyncThunk<
  PostModel[],
  void,
  { rejectValue: string }
>("post/getPostsThunk", async (_, { rejectWithValue }) => {
  const response = await getAllPosts();

  if (response.status !== 200) {
    rejectWithValue(`Error status ${response.status}`);
  }

  return response.data;
});
