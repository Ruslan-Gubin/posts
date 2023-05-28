import { useAppDispatch, useAppSelector } from "../../../shared";
import { postSlice } from "./slice";
import { getPostsThunk } from "./thunk";

export const selectPost = (state: RootState) => state.post;
export const postReducer = postSlice.reducer;

export const usePostSelect = () => {
  return useAppSelector(selectPost); 
};

export const usePostAction = () => {
 const dispatch = useAppDispatch()

 return {
  getPosts: () => dispatch(getPostsThunk()),
 }

}


