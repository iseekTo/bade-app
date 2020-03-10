import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './route'


// render routes
const RenderRoutes = () => {
    
    return (
        <div>
            <Switch>
                {routes.map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}

                <Route>
                    <Redirect to='/NotFound'></Redirect>
                </Route>
            </Switch>
        </div>
    )
}

export default RenderRoutes
