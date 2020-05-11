// 发送请求
import { IAxiosConfig } from './types'
import { bindUrl } from './helpers/utils'

function xhr(obj: IAxiosConfig){
  let {data = null, method = 'get', url, params = {}} = obj;

  url = bindUrl(url, params);

  const request = new XMLHttpRequest();
  request.open(method, url);
  request.send(data);
}

export default xhr;
