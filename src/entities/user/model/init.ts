import { UserInitState, UserModel  } from "./types";


const initialState: UserInitState = {
  posts: [],
  error: null,
  loading: false,
  user: {} as UserModel,
}

export { initialState }