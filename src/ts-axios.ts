import {IAxiosConfig} from './types';
import xhr from './xhr'

export default function axios(obj: IAxiosConfig){
  xhr(obj);
}
