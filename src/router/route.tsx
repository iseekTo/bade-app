import ReactLoadable from 'react-loadable'
import RouterLoadingComponent from '../components/RouterLoadingComponent'
import { routeType } from '../types/route.type'

const loadComponent = {
    loading: RouterLoadingComponent
}

const Welcome = ReactLoadable({ loader: () => import('../pages/Welcome'), ...loadComponent })
const Login = ReactLoadable({ loader: () => import('../pages/Login'), ...loadComponent })
const NotFound = ReactLoadable({ loader: () => import('../pages/NotFound'), ...loadComponent })

const Fruit = ReactLoadable({ loader: () => import('../pages/fruit/Fruit'), ...loadComponent })
const FruitList = ReactLoadable({ loader: () => import('../pages/fruit/FruitList'), ...loadComponent })



const routes: routeType = [
    { path: '/notFound', exact: true, component: NotFound },
    { path: '/fruit/handle', exact: true, component: Fruit },
    { path: '/login', exact: true, component: Login },
    { path: '/welcome', exact: true, component: Welcome },
    { path: '/fruit/list', exact: true, component: FruitList }

    
]

export default routes
