import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Auth from '../pages/Auth'
import Login from '../pages/Login'
import Index from '../pages/home/Index'


// render routes
const RenderRoutes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
				<Route component={Login} exact path="/login" />
                <Auth path='/' Component={Index} />
            </Switch>
        </BrowserRouter>
    )
}

export default RenderRoutes
