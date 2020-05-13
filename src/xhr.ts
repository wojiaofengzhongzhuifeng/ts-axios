// 发送请求
import { IAxiosConfig, Xhr } from './types'
import { bindUrl, transformRequestData, transformRequestHeaders, setHeader} from './helpers/utils'

let xhr: Xhr = (obj) => {
  return new Promise((resolve, reject)=>{
    let {data = null, method = 'get', url, params = {}, headers = {}} = obj;

    url = bindUrl(url, params);
    data = transformRequestData(data);
    headers = transformRequestHeaders(headers);

    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        console.log(request);
        let data = request.response;
        let status = request.status;
        let statusText = request.statusText;
        let headers = request.getAllResponseHeaders();
        let config = obj;

        resolve({
          data,
          status,
          statusText,
          headers,
          config,
          request,
        });
      }
    }

    request.open(method, url);
    setHeader(request, headers);
    request.send(data);
  });
}

export default xhr;
