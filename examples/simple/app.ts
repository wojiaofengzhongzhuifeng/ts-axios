import axios from '../../src/ts-axios';
import { isEmpty } from '../../src/helpers/utils'

console.log(1)
console.log(isEmpty(null));
axios({
  method: 'get',
  url: '/simple/get#hash?a=1',
  params: {
    a: 1,
    b: [2,3],
    c: 4,
    d: {
      dd: "ddd"
    },
    e: new Date(),
    foo: '@:$, ',
    zzz: null,
    yyy: undefined,
  }
})

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Int32Array([21, 31])
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})
