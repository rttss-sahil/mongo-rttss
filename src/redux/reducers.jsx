import { CHANGE_URL, CHANGE_DB } from './actions'

export const intialState = {
    session: localStorage.getItem('session'),
    URL: localStorage.getItem('URL') || '',
    DB: localStorage.getItem('DB') || '',
    loggedIn: localStorage.getItem('URL') && localStorage.getItem('DB')
}

const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case CHANGE_URL:
            // localStorage.setItem('URL', action.payload)
            return { ...state, URL: action.payload }
        case CHANGE_DB:
            // localStorage.setItem('DB', action.payload)
            return { ...state, DB: action.payload }
        default:
            return state;
    }
}

export default rootReducer;