/*
 * @Date: 2020-03-09 14:18:43
 * @Author: lyb
 * @LastEditors: lyb
 * @LastEditTime: 2020-04-03 15:11:23
 */
import Http from './http'
import { 
    fruitStateType, 
    fruitListType, 
    fruitPromise, 
    removeFruitType, 
    handleFruit 
} from '../types/fruit.type'


// handleFruit
export const addFruit = (params: fruitStateType): handleFruit => Http.post('/fruits/create_fruit', params)

export const fruitList = (params?: fruitListType): fruitPromise => Http.get('/fruits/list', params)

export const removeFruit = (id: number): removeFruitType => Http.post(`/fruits/remove_one/${id}`)