export interface CommentModel {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentCashe {
  [value: string]: CommentModel[];
}

export interface CommentInitState {
  loading: boolean;
  error: null | string;
  comment: ICommentCashe;
}

export interface GetCommentRes {
  postId: number;
  data: CommentModel[];
}
