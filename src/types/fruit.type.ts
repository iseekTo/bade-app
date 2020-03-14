import { listKey, interParams } from './common.type'

// 增加/编辑水果
export interface fruitStateType extends Partial<listKey> {
    title: string
    price: number | string
    create_at?: string
}
// 增删返回体
export type handleFruit = Promise<interParams<fruitStateType>>

export type removeFruitType<T = symbol> = Promise<Omit<interParams<T>, 'result'>>

// 分页查询参数
export interface fruitListType extends Partial<fruitStateType> {
    page?: number
    pageSize?: number
}

export type arrayFruitStateKeys = Array<fruitStateType>
export type appendTotal = interParams<arrayFruitStateKeys> & { 
    readonly total?: number 
} 

// 导出水果列表返回结构类型<Promise>
export type fruitPromise = Promise<appendTotal>

