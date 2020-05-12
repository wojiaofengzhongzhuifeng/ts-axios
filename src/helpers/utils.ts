import {
  BindUrlFun,
  ChangeArrayValueFun,
  ChangeDateObjectValueFun,
  ChangeObjectValueFun,
  IsArrayFun, IsDateObject,
  IsEmptyFun,
  IsObjectFun
} from '../types'

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
  return tempResult
}
// bug: 未处理多个 key:value 情况!输入 key 和对象 value, 输出转义后的 paramsString
export let changeObjectValue: ChangeObjectValueFun = (key, objectValue) => {
  let encodeValue = encodeURI(JSON.stringify(objectValue));
  let tempResult = Object.keys(objectValue).reduce((preString: string, value: any)=>{
    return preString += `${key}=${encodeValue}&`
  }, '');
  return tempResult;
}
// 将 date 转化为 date.toISOString
export let changeDateObjectValue: ChangeDateObjectValueFun = (key, dateObjectValue) => {
  return `${key}=${dateObjectValue.toISOString()}&`;
}

// 将 url 与 params 进行拼接, 生成一个新的 url
export let bindUrl: BindUrlFun = (url, params) => {
  let tempResult = !isEmpty(params) ? Object.keys(params).reduce((preUrl, key, index) => {
    let value = params[key];
    let keyValue = `${key}=${value}&`;
    // let conditionalString = index + 1 === Object.keys(params).length ? '' : '&';
    // 处理 value 是 array 的情况
    if(isArray(value)){
      keyValue = changeArrayValue(key, value)
    }
    // 处理 value 是 object 的情况
    if(isObject(value)){
      keyValue = changeObjectValue(key, value)
    }
    // 处理 value 是 dateObject 的情况
    if(isDateObject(value)){
      keyValue = changeDateObjectValue(key, value)
    }

    return preUrl += `${keyValue}`
  }, `${url}?`) : url;
  return tempResult.substring(0, tempResult.length - 1);
}

// 判断是否为数组
export let isArray: IsArrayFun = (data) => {
  return Object.prototype.toString.call(data) === '[object Array]';
}

// 判断是否为狭义的对象
export let isObject: IsObjectFun = (data) => {
  return Object.prototype.toString.call(data) === '[object Object]';
}

export let isDateObject: IsDateObject = (data) => {
  return data instanceof Date;
}
