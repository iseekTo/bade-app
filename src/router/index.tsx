import React, { useState } from 'react'
// import { Spin } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom'
import routes from './route'


// render routes
const RenderRoutes = () => {
    const [load, setLoad] = useState<boolean>(true)

    // useEffect(() => {
    //     setLoad(false)

    //     return () => setLoad(false)
    // }, [])

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
