import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

let WithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

//Console message
// console.info(
//     '%cWrite a console message here, check this website: https://website',
//     'font-weight:bold; color:navy; font-size: 2rem'
// )

ReactDOM.render(<WithRouter />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
