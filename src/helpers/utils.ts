import { BindUrlFun, IsEmptyFun } from '../types'

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

export let bindUrl: BindUrlFun = (url, params) => {
  return !isEmpty(params) ? Object.keys(params).reduce((preUrl, key, index) => {
    let value = params[key];
    let conditionalString = index + 1 === Object.keys(params).length ? '' : '&';

    return preUrl += `${key}=${value}${conditionalString}`
  }, `${url}?`) : url;
}
