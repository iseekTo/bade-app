import Http from './http'
import { fruitStateType, fruitListType, fruitPromise, handleFruit } from '../types/fruit.type'


// handleFruit
export const addFruit = (params: fruitStateType) => Http.post('/fruits/create_fruit', params)

export const fruitList = (params?: fruitListType): fruitPromise => Http.get('/fruits/list', params)