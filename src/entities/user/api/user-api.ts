import { AxiosService } from "../../../shared"
import { UserRoute } from "../../../shared/constants"

export const getUser = (userID: number) => {
  return AxiosService.get(UserRoute.get(userID))
}

export const getUserPosts = (userID: number) => {
  return AxiosService.get(UserRoute.getUserPosts(userID))
}