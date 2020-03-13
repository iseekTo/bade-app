/** Input || textarea -> event & type */
export type inputBoxType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

/** 
 * @description get type all keys :-)
 * @example 
 *  {
 *     type allKeys = getTypeAllKeys<HTMLOptionElement>
 *     let key: allKeys = '"target" | "nativeEvent" | "currentTarget" | "bubbles" | "cancelable" | ....'
 *  }
 */
export type getTypeAllKeys<K> = keyof K

/** extends other -> event & type */
export type commonEventType<T> = React.ChangeEvent<T>

/** 通用返回体 */
export type returnParams<T> = {
    status: number
    info: string
    result: T
}