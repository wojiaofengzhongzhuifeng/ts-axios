import { Axios, TransformResponseData } from './types'
import xhr from './xhr'

let transformResponseData: TransformResponseData = (response) => {
  response.data = JSON.parse(response.data);
}

let axios: Axios = (config) => {
  return xhr(config).then((response)=>{
    transformResponseData(response);
    return response;
  })
}
export default axios
