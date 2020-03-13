
// 增加/编辑水果
export interface fruitStateType{
    title: string
    price: number | string
}

export interface fruitListType extends Partial<fruitStateType> {
    page?: number
    pageSize?: number
}
