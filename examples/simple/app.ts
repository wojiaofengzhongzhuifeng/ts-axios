import axios from '../../src/ts-axios';

console.log(1)
axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})
