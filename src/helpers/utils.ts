import { IsEmptyFun } from '../types'

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
