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

export interface IsArrayFun {
  (data: any): boolean
}
export interface ChangeArrayValueFun {
 (key: string, value: (string | number)[]): string
}
export interface ChangeObjectValueFun {
  (key: string, value: object): string
}
export interface ChangeDateObjectValueFun {
  (key: string, value: Date): string
}

export interface IsObjectFun {
  (data: any): boolean
}

export interface IsDateObject {
  (data: any): boolean
}

export interface TransformRequestDataFun {
  (data: any): any
}
export interface TransformRequestHeadersFun {
  (data: object): object
}
export interface SetHeaderFun {
  (request: XMLHttpRequest, headers: any): void
}
export type AxiosResponsePromise = Promise<AxiosResponse>
export interface Xhr {
  (config: IAxiosConfig): AxiosResponsePromise
}
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: {
    [key: string]: string
  }
  config: IAxiosConfig
  request: any
}
export interface Axios {
  (config: IAxiosConfig): AxiosResponsePromise
}
export interface ParseHeaders {
  (headers: string): {
    [key: string]: string
  }
}
export interface TransformResponseData {
  (response: AxiosResponse): void
}
