import Http from './http'

export const addFruit = (params: any) => Http.post('/fruits/create_fruit', params)
