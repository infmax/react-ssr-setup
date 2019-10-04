import {produce} from 'immer'
import {ActionTypes} from './actions'
import {Action} from './types'

export const initialState = []

export default (state = initialState, action: Action) =>
    produce(state, () => {
        switch (action.type) {
            case ActionTypes.FETCH_FEATURE: {
                return
            }
            case ActionTypes.NEW_FEATURE: {
                return [...state, action.payload]
            }
        }
    });
