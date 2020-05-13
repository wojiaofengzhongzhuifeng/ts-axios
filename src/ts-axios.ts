import { Axios } from './types'
import xhr from './xhr'

let axios: Axios = (config) => {
  return xhr(config)
}
export default axios
