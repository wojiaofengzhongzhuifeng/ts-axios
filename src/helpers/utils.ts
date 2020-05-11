import { BindUrlFun, ChangeArrayValueFun, IsArrayFun, IsEmptyFun } from '../types'

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

// 将key, 数组 value 转化为 paramsString
export let changeArrayValue: ChangeArrayValueFun = (key, arrayValue) => {
  let tempResult = arrayValue.reduce((preString: string, value: any)=>{
    return preString += `${key}[]=${value}&`
  }, '');
  return tempResult.substring(0, tempResult.length - 1)
}

// 将 url 与 params 进行拼接, 生成一个新的 url
export let bindUrl: BindUrlFun = (url, params) => {
  return !isEmpty(params) ? Object.keys(params).reduce((preUrl, key, index) => {
    let value = params[key];
    let keyValue = `${key}=${value}`;
    let conditionalString = index + 1 === Object.keys(params).length ? '' : '&';
    // 处理 value 是 array 的情况
    if(isArray(value)){
      keyValue = changeArrayValue(key, value)
    }

    return preUrl += `${keyValue}${conditionalString}`
  }, `${url}?`) : url;
}

// 判断是否为数组
export let isArray: IsArrayFun = (data) => {
  return Object.prototype.toString.call(data) === '[object Array]';
}
