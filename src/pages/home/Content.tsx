import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import routes from '../../router/route'


const { Content } = Layout
const contentStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: 24,
    margin: 24,
    minHeight: 280
}


//-- main content --
const Contents = () => {

    return (
        <Content style={contentStyle}>
            <Switch>
                {
                    routes.map(ele => <Route render={() => <ele.component />} key={ele.path} path={ele.path} />)
                }
                <Redirect from="/" exact to="/welcome" />
                <Redirect from="*" exact to="/notFound" />
            </Switch>
        </Content>
    )
}

export default Contents
