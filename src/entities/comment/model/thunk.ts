import { createAsyncThunk } from "@reduxjs/toolkit";
import { getComments } from "../api/comment-api";
import { GetCommentRes } from "./types";

export const getCommentsThunk = createAsyncThunk<
  GetCommentRes,
  number,
  { rejectValue: string }
>("comment/getCommentsThunk", async (id, { rejectWithValue }) => {
  const response = await getComments(id);

  if (response.status !== 200) {
    rejectWithValue(`Error status ${response.status}`);
  }

  return { postId: id, data: response.data };
});
