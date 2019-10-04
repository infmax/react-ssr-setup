import React from 'react'
import css from './Features.module.css'
import {connect} from "react-redux"
import {setLocale} from '../../store/app/actions'
import {Link} from "react-router-dom"

const Features = (props: any) => {
    React.useEffect(() => {
        props.setLocale()
    }, [])

    const {feature} = props

    return (
        <React.Fragment>
            <h2>{('features')}</h2>

            <div>
                <Link className={css.addLink} to={'feature/new'}>Add feature</Link>
            </div>
            <ul className={css.wrapper}>
                <li className={css.react}>React 16.x (latest)</li>
                <li className={css.webpack}>Webpack 4</li>
                <li className={css.linter}>ESLint 5</li>
                <li className={css.hot}>Babel 7</li>
                <li className={css.hot}>TypeScript (using Babel 7)</li>
                <li className={css.jest}>Jest 24</li>
                <li className={css.rtl}>React Testing Library</li>
                <li>React Router 5</li>
                <li>Redux (+ Thunk)</li>
                <li>Immer</li>
                <li>Reselect</li>
                <li>React Helmet</li>
                <li>Express Webserver + Server Side Rendering</li>
                <li>CSS Modules</li>
                <li>PostCSS</li>
                <li>Prettier (incl. precommit-hook via lint-staged + husky)</li>
                <li>HMR</li>
                {feature.map((f, idx) => <li key={`feature-${idx}`}>{f.name}</li>)}
            </ul>
        </React.Fragment>
    )
}

const mapStateToProps = ({feature}) => ({feature})

export default {component: connect(mapStateToProps, {setLocale})(Features)}
