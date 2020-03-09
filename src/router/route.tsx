// import ReactLoadable from 'react-loadable'


import Home from '../App'
import Fruit from '../pages/Fruit'
import NotFound from '../pages/NotFound'

type route = {
    path: string
    exact: boolean
    component: React.ComponentType
}

type routeType = Array<route>

const routes: routeType = [
    { path: '/', exact: true, component: Home },
    { path: '/notFound', exact: true, component: NotFound },
    { path: '/fruit', exact: true, component: Fruit },
    /** todo... */
]

export default routes
