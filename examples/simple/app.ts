import axios from '../../src/ts-axios';

// axios({
//   method: 'get',
//   url: '/simple/get#hash?a=1',
//   params: {
//     a: 1,
//     b: [2,3],
//     c: 4,
//     d: {
//       dd: "ddd"
//     },
//     e: new Date(),
//     foo: '@:$, ',
//     zzz: null,
//     yyy: undefined,
//   }
// })

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  },
  headers: {
    'content-type': 'application/json;charset=utf-8',
    a: 1,
    b: 2,
  }
})

// const arr = new Int32Array([21, 31])
// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })
