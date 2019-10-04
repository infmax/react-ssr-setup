import App from './App'
import Features from "pages/Features"
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
                ...NotFoundPage
            }
        ]
    }
]
