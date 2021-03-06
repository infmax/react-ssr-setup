import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import {configureStore} from '../shared/store'
import createHistory from '../shared/store/history'
import {renderRoutes} from "react-router-config"
import Routes from "Routes"
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'

const history = createHistory()

const axiosInstance = axios.create({
    baseURL: '/api',
})

// Create/use the store
// history MUST be passed here if you want syncing between server on initial route
const store =
    window.store ||
    configureStore({
        initialState: window.__PRELOADED_STATE__,
        axiosInstance
    })

hydrate(
    <Provider store={store}>
        <Router history={history}>
                <HelmetProvider>
                    <BrowserRouter>
                        <div>{renderRoutes(Routes)}</div>
                    </BrowserRouter>
                </HelmetProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
)

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept()
    }

    if (!window.store) {
        window.store = store
    }
}
