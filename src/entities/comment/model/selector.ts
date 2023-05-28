import { useAppDispatch, useAppSelector } from "../../../shared";
import { commentSlice } from "./slice";
import { getCommentsThunk } from "./thunk";

const selectComment = (state: RootState) => state.comment;
export const commentReducer = commentSlice.reducer;

export const useCommentSelector = () => {
  return useAppSelector(selectComment); 
};

export const useCommentAction = () => {
 const dispatch = useAppDispatch()

 return {
  getComments: (id: number) => dispatch(getCommentsThunk(id)),
 }

}


