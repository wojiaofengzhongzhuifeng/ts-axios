// 发送请求
import { IAxiosConfig } from './types'

function xhr(obj: IAxiosConfig){
  const {data = null, method = 'get', url} = obj;


  const request = new XMLHttpRequest();
  request.open(method, url);
  request.send(data);
}

export default xhr;
