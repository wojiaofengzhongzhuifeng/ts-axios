// 发送请求
import { IAxiosConfig } from './types'
import { bindUrl, transformRequestData } from './helpers/utils'

function xhr(obj: IAxiosConfig){
  let {data = null, method = 'get', url, params = {}} = obj;

  url = bindUrl(url, params);
  data = transformRequestData(data);

  const request = new XMLHttpRequest();
  request.open(method, url);
  request.send(data);
}

export default xhr;
