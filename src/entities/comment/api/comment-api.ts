import { AxiosService } from "../../../shared"
import { CommentsRoute } from "../../../shared/constants"

export const getComments = (id: number) => {
    return AxiosService.get(CommentsRoute.get(id))
}