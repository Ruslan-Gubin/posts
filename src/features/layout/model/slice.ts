import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./init";
import { reducers } from "./reducers";

export const layoutFeaturesSlice = createSlice({
  name: "layoutFeatures",
  initialState,
  reducers,
});

