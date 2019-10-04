import App from './App'
import Features from "components/Features"

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
