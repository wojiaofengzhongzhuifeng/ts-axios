// 发送请求
import { IAxiosConfig, Xhr } from './types'
import {
  bindUrl,
  transformRequestData,
  transformRequestHeaders,
  setHeader,
  parseHeaders
} from './helpers/utils'

let xhr: Xhr = (obj) => {
  return new Promise((resolve, reject)=>{
    let {data = null, method = 'get', url, params = {}, headers = {}} = obj;

    url = bindUrl(url, params);
    data = transformRequestData(data);
    headers = transformRequestHeaders(headers);

    const request = new XMLHttpRequest();

    request.onerror = function handleError() {
      reject(new Error('Network Error'))
    }

    request.onreadystatechange = function() {
      if (request.readyState !== 4) {
        return
      }

      if (request.status === 0) {
        return
      }

      if (request.readyState === 4) {
        console.log(request);
        let responseData = request.response;
        let status = request.status;
        let statusText = request.statusText;
        let headers = parseHeaders(request.getAllResponseHeaders());
        let config = obj;

        resolve({
          data: responseData,
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
