import { AxiosService } from "../../../shared"
import { PostRoute } from "../../../shared/constants"

export const getAllPosts = () => {
  return AxiosService.get(PostRoute.getPosts)
}