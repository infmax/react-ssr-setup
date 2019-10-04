import React from 'react'

const NotFoundPage = ({staticContext = {}}) => {
    staticContext.notFound = true
    return <div>
        The page you are looking for doesn’t exist or an other error occurred
    </div>
}

export default {
    component: NotFoundPage
}
