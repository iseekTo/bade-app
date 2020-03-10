import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { i_loginType } from '../types/login.type'

const Auth = ({ Component, ...args }: i_loginType) => {
    // 默认已登录
    const islogin = true
    return (
        <Route
            {...args}
            render={(props) => {
                return (
                    islogin 
                    ? <Component {...props} />
                    : <Redirect to='/login' />
                )
            }}
        />
    )
}

export default Auth
