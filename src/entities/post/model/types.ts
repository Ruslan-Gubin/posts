export interface PostModel {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface PostInitState {
  loading: boolean;
  error: string | null;
  posts: PostModel[];
}


