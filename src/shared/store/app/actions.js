export const ActionTypes = {
    SETLOCALE: 'app/set-locale',
}

export const setLocale = (locale) => async (dispatch, getState, api) => {
    dispatch({
        type: ActionTypes.SETLOCALE,
        payload: locale
    })
}
