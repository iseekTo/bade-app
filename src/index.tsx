import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './router/index';


declare const module: any;

const render = () => {
    ReactDOM.render(
        // <HashRouter>
        //     <App />
        // </HashRouter>,
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

render()


if (module.hot) {
    module.hot.accept('./App', () => {
        render()
    })
}
