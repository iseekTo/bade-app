import Http from './http'
import { fruitStateType } from '../types/fruit'

export const addFruit = (params: fruitStateType) => Http.post('/fruits/create_fruit', params)
