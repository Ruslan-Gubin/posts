import { useAppDispatch, useAppSelector } from "../../../shared";
import { userSlice } from "./slice";
import { getUserPostsThunk, getUserThunk } from "./thunk";

const select = (state: RootState) => state.user;
export const userReducer = userSlice.reducer;

export const useUserSelect = () => {
  return useAppSelector(select);
};

export const useUserAction = () => {
  const dispatch = useAppDispatch();

  return {
    getUserPosts: ({ id }: { id: number }) => dispatch(getUserPostsThunk(id)),
    getUser: ({ id }: { id: number }) => dispatch(getUserThunk(id)),
  };
};
