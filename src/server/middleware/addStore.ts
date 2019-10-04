import * as express from 'express'
import {configureStore} from '../../shared/store'
import axios from 'axios'
import config from './../config'

const addStore = (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
): void => {
    const axiosInstance = axios.create({
        baseURL: config.backend_url,
        headers: {cookie: _req.get('cookie') || ''}
    })

    res.locals.store = configureStore({axiosInstance})
    next()
}

export default addStore
