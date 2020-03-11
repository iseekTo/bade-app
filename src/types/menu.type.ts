
/**
 * menu type
 * created by 2020年03月10日16:40:03
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
