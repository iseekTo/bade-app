import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import App from './App'


declare const module: any

const render = () => {
    ReactDOM.render(
        // <BrowserRouter>
            <App />,
        // </BrowserRouter>,
        document.getElementById('root')
    )
}

render()


if (module.hot) {
    module.hot.accept('./App', () => {
        render()
    })
}
