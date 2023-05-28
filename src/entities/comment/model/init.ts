import { CommentInitState, ICommentCashe  } from "./types";


const initialState: CommentInitState = {
  loading: false,
  error: null,
  comment: {} as ICommentCashe, 
}

export { initialState }