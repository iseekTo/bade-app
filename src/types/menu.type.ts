
/**
 * menu type
 * created in 2020/03/1
 * @author lyb
 */

export type i_menuType = {
    path: string
    title: string
    children?: i_menuType[]
    icon?: React.ReactNode
}

declare type ArrayMenuType = Array<i_menuType>

export default ArrayMenuType
