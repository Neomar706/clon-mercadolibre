import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { App } from './App'
import { Toastify } from './components/atoms/Toastify'
import { store } from './redux/store'
import './index.css'



const app = (
    <Provider store={store}>
        <Toastify />
        <App />
    </Provider>
)

ReactDOM.createRoot(document.getElementById('root')).render(app)
