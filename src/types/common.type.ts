/**
 * created by lyb 2020/03/13
 */

/** 列表数组对象里的类型 */ 
export type listKey = {
    readonly _id: string
    readonly key: string
}

/**
 * 统一的接口返回内容参数
 */
export type interParams<T> = {
    status: number
    info: string
    result: T
}
