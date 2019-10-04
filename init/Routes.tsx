import App from './App'
import Features from "../src/shared/pages/Features"

export default [
    {
        ...App,
        routes: [
            {
                ...Features,
                path: '/',
                exact: true
            },
        ]
    }
]
