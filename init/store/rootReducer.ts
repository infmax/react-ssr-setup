import {combineReducers} from 'redux'
import app from './app/reducer'
import feature from './feature/reducer'

const createRootReducer = () =>
    combineReducers({
        app,
        feature
    })

export default createRootReducer
