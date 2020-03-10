import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
// @ts-ignore
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
    const { pathname } = useHistory().location

    return (
        // <TransitionGroup>
        //     <CSSTransition classNames="fade" key={pathname} timeout={500}>
                <Content style={contentStyle}>
                    <Switch>
                        {
                            routes.map(ele => <Route render={() => <ele.component />} key={ele.path} path={ele.path} />)
                        }
                        <Redirect from="/" exact to="/welcome" />
                        <Redirect to="/NotFound" />
                    </Switch>
                </Content>
        //     </CSSTransition>
        // </TransitionGroup>
    )
}

export default Contents
