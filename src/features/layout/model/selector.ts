import { useAppDispatch, useAppSelector } from "../../../shared";
import { layoutFeaturesSlice } from "./slice";

const select = (state: RootState) => state.layoutFeatures;
const action = layoutFeaturesSlice.actions;
export const layoutFeaturesReducer = layoutFeaturesSlice.reducer;


export const useLayoutSelect = () => {
  return useAppSelector(select); 
};

export const useLayoutAction = () => {
 const dispatch = useAppDispatch()

 return {
  toggleAside: () => dispatch(action.toggleAside()),
  setSearchValue: (value: string) => dispatch(action.setValue({ value })),
  activeSearch: () => dispatch(action.activeSearch()),
  cancelSearch: () => dispatch(action.cancelSearch()),
 }

}


