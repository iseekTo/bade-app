import ReactLoadable from 'react-loadable'

import NotFound from '../pages/NotFound'

type route = {
    path: string
    exact: boolean
    component: React.ComponentType
}

type routeType = Array<route>

const routes: routeType = [
    { path: '/NotFound', exact: true, component: NotFound }
    /** todo... */
]

export default routes
