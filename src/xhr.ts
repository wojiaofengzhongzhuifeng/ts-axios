// 发送请求
import { IAxiosConfig } from './types'
import { bindUrl, transformRequestData, transformRequestHeaders, setHeader} from './helpers/utils'

function xhr(obj: IAxiosConfig){
  return new Promise((resolve, reject)=>{
    let {data = null, method = 'get', url, params = {}, headers = {}} = obj;

    url = bindUrl(url, params);
    data = transformRequestData(data);
    headers = transformRequestHeaders(headers);

    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        resolve(request);
      }
    }

    request.open(method, url);
    setHeader(request, headers);
    request.send(data);
  });
}

export default xhr;
