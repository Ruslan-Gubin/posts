import { AxiosRequestConfig, AxiosResponse } from "axios"
import { publicHttp } from "./publicHttp"


const  axiosGet = <C>(url: string, config?: AxiosRequestConfig<C> | undefined):Promise<AxiosResponse<any, any>> => {
  return publicHttp.get(url, config)
}

export const AxiosService = {
  get: axiosGet,
}
