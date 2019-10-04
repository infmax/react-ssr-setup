import * as React from 'react'
import * as express from 'express'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router-dom'
import {Store} from 'redux'
import {Provider} from 'react-redux'
import {HelmetProvider} from 'react-helmet-async'
import Html from '../components/HTML'
import {renderRoutes} from 'react-router-config'
import Routes from "Routes"
import {matchRoutes} from 'react-router-config'

const helmetContext = {}
const routerContext: any = {}

const serverRenderer: any = async (
    req: express.Request & { store: Store },
    res: express.Response
) => {

    const store = res.locals.store

    const promises = matchRoutes(Routes, req.path)
        .map(({route}) => route.loadData ? route.loadData(store) : null)
        .map(promise => {
            if (promise) {
                return new Promise((resolve) => {
                    promise.then(resolve).catch(resolve)
                })
            }
        })

    await Promise.all(promises)


    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={routerContext}>
                <HelmetProvider context={helmetContext}>
                    <div>{renderRoutes(Routes)}</div>
                </HelmetProvider>
            </StaticRouter>
        </Provider>
    )

    const state = JSON.stringify(res.locals.store.getState())

    if (routerContext.url) {
        return res.redirect(301, routerContext.url)
    }
    if (routerContext.notFound) {
        res.status(404)
    }

    return res.send(
        '<!doctype html>' +
        renderToString(
            <Html
                css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
                helmetContext={helmetContext}
                scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
                state={state}
            >
                {content}
            </Html>
        )
    )
}

export default serverRenderer
