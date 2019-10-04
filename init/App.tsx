import React from 'react'
import {Helmet} from 'react-helmet-async'
import favicon from '../shared/assets/favicon.png'
import {ReactComponent as ReactLogo} from './assets/react.svg'
import css from 'App.module.css'
import {renderRoutes} from "react-router-config"
import {setLocale} from "store/app/actions"

const App: React.FC<any> = props => {
    const {route} = props

    return (
        <div className={css.wrapper}>
            <Helmet
                defaultTitle="React SSR Starter – TypeScript Edition"
                titleTemplate="%s – React SSR Starter – TypeScript Edition"
                link={[{rel: 'icon', type: 'image/png', href: favicon}]}
            />
            <h1>
                <ReactLogo className={css.reactLogo}/> React + Express – SSR Starter – TypeScript
                Edition
            </h1>

            <div>
                {renderRoutes(route.routes)}
            </div>

        </div>
    )
}

export default {component: App, loadData: ({dispatch}) => dispatch(setLocale())}
