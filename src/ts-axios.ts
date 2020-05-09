import {IAxiosConfig} from './types';

export default function axios(obj: IAxiosConfig){
  console.log(obj)
}

// 这样使用
axios({
  method: 'get',
  url: 'www.baidu.com',
  headers: {
    test: 1
  },
  params: {
    a: 1,
    b: 2,
  },
});
