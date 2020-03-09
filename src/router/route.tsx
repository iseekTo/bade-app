import ReactLoadable from 'react-loadable'
import RouterLoadingComponent from '../components/RouterLoadingComponent'

const HomeLoadable = ReactLoadable({ loader: () => import('../App'), loading: RouterLoadingComponent })
const Fruit = ReactLoadable({ loader: () => import('../pages/Fruit'), loading: RouterLoadingComponent })
const NotFound = ReactLoadable({ loader: () => import('../pages/NotFound'), loading: RouterLoadingComponent })


type route = {
    path: string
    exact: boolean
    component: React.ComponentType
}

type routeType = Array<route>

const routes: routeType = [
    { path: '/', exact: true, component: HomeLoadable },
    { path: '/notFound', exact: true, component: NotFound },
    { path: '/fruit', exact: true, component: Fruit },
    /** todo... */
]

export default routes
