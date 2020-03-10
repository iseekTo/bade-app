import ReactLoadable from 'react-loadable'
import RouterLoadingComponent from '../components/RouterLoadingComponent'
import { routeType } from '../types/route.type'

const Welcome = ReactLoadable({ loader: () => import('../pages/Welcome'), loading: RouterLoadingComponent })
const Fruit = ReactLoadable({ loader: () => import('../pages/Fruit'), loading: RouterLoadingComponent })
const Login = ReactLoadable({ loader: () => import('../pages/Login'), loading: RouterLoadingComponent })

const NotFound = ReactLoadable({ loader: () => import('../pages/NotFound'), loading: RouterLoadingComponent })


const routes: routeType = [
    { path: '/notFound', exact: true, component: NotFound },
    { path: '/fruit', exact: true, component: Fruit },
    { path: '/login', exact: true, component: Login },
    { path: '/welcome', exact: true, component: Welcome }

    
]

export default routes
