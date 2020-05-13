import axios from '../../src/ts-axios';

// axios({
//   method: 'get',
//   url: '/error/get1'
// }).then((res) => {
//   console.log(res)
// }).catch((e) => {
//   console.log(e)
// })
//
// axios({
//   method: 'get',
//   url: '/error/get'
// }).then((res) => {
//   console.log(res)
// }).catch((e) => {
//   console.log(e)
// })
//
// setTimeout(() => {
//   axios({
//     method: 'get',
//     url: '/error/get'
//   }).then((res) => {
//     console.log(res)
//   }).catch((e) => {
//     console.log(e)
//   })
// }, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  // 如果请求发送后, 2s 还没有接受到响应数据, 抛出错误
  timeout: 2000,
}).then((res) => {
  console.log(res)
}).catch((e) => {
  console.log(e.message)
})
