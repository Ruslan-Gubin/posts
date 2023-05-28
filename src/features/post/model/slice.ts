import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const postFeaturesSlice = createSlice({
  name: "postFeatures",
  initialState,
  reducers,
});

