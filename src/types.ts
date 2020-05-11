type Method = 'get' | 'GET'
  | 'delete' | 'Delete'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'

export interface IAxiosConfig {
  method?: Method,
  url: string,
  headers?: Object,
  params?: Object,
  data?: any,
}

export interface IsEmptyFun{
  (data: any): Boolean
}

export interface BindUrlFun {
  (url: string, params: {
    [key: string]: any
  }): string
}

