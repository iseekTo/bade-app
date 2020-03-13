import Http from './http'
import { fruitStateType, fruitListType } from '../types/fruit.type'

export const addFruit = (params: fruitStateType) => Http.post('/fruits/create_fruit', params)

export const fruitList = (params?: fruitListType) => Http.get('/fruits/list', params)