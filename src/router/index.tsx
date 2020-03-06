import React from 'react'
import routes from './route'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'


const RenderRoutes = () => {
    // go to next route
    const { push } = useHistory()

    return (
        <>
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
        </>
    )
}

export default RenderRoutes
