import { BindUrlFun, IsEmptyFun } from '../types'

// 是否是空值, 包括空数组, 空对象, 空字符串, null, undefined
export let isEmpty: IsEmptyFun = (data) => {
  let type = Object.prototype.toString.call(data)
  switch (type) {
    case '[object Object]':
      return Object.keys(data).length === 0
    case '[object Array]':
      return data.length === 0
    default:
      return !Boolean(data)
  }
}

// 将 url 与 params 进行拼接, 生成一个新的 url
export let bindUrl: BindUrlFun = (url, params) => {
  return !isEmpty(params) ? Object.keys(params).reduce((preUrl, key, index) => {
    let value = params[key];
    let conditionalString = index + 1 === Object.keys(params).length ? '' : '&';

    return preUrl += `${key}=${value}${conditionalString}`
  }, `${url}?`) : url;
}
