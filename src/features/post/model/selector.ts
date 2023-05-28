import { useAppDispatch, useAppSelector } from "../../../shared";
import { postFeaturesSlice } from "./slice";

const selectPostFeatures = (state: RootState) => state.postFeatures;

const postFeaturesAction = postFeaturesSlice.actions;

export const postFeaturesReducer = postFeaturesSlice.reducer;

export const usePostFeatureSelect = () => {
  return useAppSelector(selectPostFeatures); 
};

export const usePostFeatureAction = () => {
 const dispatch = useAppDispatch()

 return {
  setPage: ({ page }: { page: number }) => dispatch(postFeaturesAction.setPage({ page })),
  setTotalPosts: ({ total }: { total: number }) => dispatch(postFeaturesAction.setTotalPosts({ total })),
 }

}


