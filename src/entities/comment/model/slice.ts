import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";
import { extraReducers } from "./extra-reducer";

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers,
  extraReducers,
});

