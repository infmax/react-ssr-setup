export const ActionTypes = {
    FETCH_FEATURE: 'fetch_feature',
    NEW_FEATURE: 'new_feature',
}

export const fetchFeature = () => async (dispatch, getState, api) => {
    dispatch({
        type: ActionTypes.FETCH_FEATURE,
    })
}

export const newFeature = (payload) => async (dispatch, getState, api) => {
    dispatch({
        type: ActionTypes.NEW_FEATURE,
        payload
    })
}
