/**
 * @created 2020/03/13
 * @author lyb
 */

import { listKey, interParams } from './common.type'

// 增加/编辑水果
export interface fruitStateType extends Partial<listKey> {
    title: string
    price: number | string
    create_at?: string
}
// 新增 -> result字段选择不给予提示
export type handleFruit = Promise<interParams<never>>

// 删除 -> 剔除result字段，因为其不存在
export type removeFruitType<T = symbol> = Promise<Omit<interParams<T>, 'result'>>

// 分页查询参数
export interface fruitListType extends Partial<fruitStateType> {
    page?: number
    pageSize?: number
}

// 水果key值组合为 -> [{}]
export type arrayFruitStateKeys = Array<fruitStateType>

// 增加列表总计数为可读，组成一个返回体
export type appendTotal = interParams<arrayFruitStateKeys> & { 
    readonly total?: number 
} 

// 最终，导出水果列表返回结构类型<Promise>
export type fruitPromise = Promise<appendTotal>

