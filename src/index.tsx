import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './router/index'
import Menu from './pages/Menu'

declare const module: any

const render = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Menu />
            <Routes />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

render()


if (module.hot) {
    module.hot.accept('./router/index', () => {
        render()
    })
}
