// 发送请求
import { IAxiosConfig } from './types'
import { bindUrl, transformRequestData, transformRequestHeaders, setHeader} from './helpers/utils'

function xhr(obj: IAxiosConfig){
  let {data = null, method = 'get', url, params = {}, headers = {}} = obj;

  url = bindUrl(url, params);
  data = transformRequestData(data);
  headers = transformRequestHeaders(headers);

  const request = new XMLHttpRequest();
  request.open(method, url);
  setHeader(request, headers);
  request.send(data);
}

export default xhr;
