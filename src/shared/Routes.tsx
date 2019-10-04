import App from './App'
import Features from "pages/Features"
import NewFeaturePage from "pages/Features/new"
import NotFoundPage from "pages/NotFoundPage"

export default [
    {
        ...App,
        routes: [
            {
                ...Features,
                path: '/',
                exact: true
            },
            {
                ...NewFeaturePage,
                path: '/feature/new'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]
