import { combineReducers } from "@reduxjs/toolkit";
import { commentReducer, postReducer, userReducer } from "../../../entities";
import { layoutFeaturesReducer, postFeaturesReducer } from "../../../features";

export const rootReducer = combineReducers({
  post: postReducer,
  postFeatures: postFeaturesReducer,
  comment: commentReducer,
  layoutFeatures: layoutFeaturesReducer,
  user: userReducer,
});
