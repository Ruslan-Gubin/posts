import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostModel } from "../../post";
import { getUser, getUserPosts } from "../api/user-api";
import { UserModel } from "./types";

export const getUserThunk = createAsyncThunk<
  UserModel,
  number,
  { rejectValue: string }
>("user/getUserThunk", async (userId, { rejectWithValue }) => {
  const response = await getUser(userId);

  if (response.status !== 200) {
    rejectWithValue(`Error status ${response.status}`);
  }

  return response.data;
});

export const getUserPostsThunk = createAsyncThunk<
  PostModel[],
  number,
  { rejectValue: string }
>("user/getUserPostsThunk", async (userId, { rejectWithValue }) => {
  const response = await getUserPosts(userId);

  if (response.status !== 200) {
    rejectWithValue(`Error status ${response.status}`);
  }

  return response.data;
});
