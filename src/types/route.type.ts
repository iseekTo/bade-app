/**
 * route type
 * created in 2020年03月10日16:40:28
 * @author lyb
 */

type route = {
    path: string
    exact: boolean
    component: React.ComponentType
}

export type routeType = Array<route>