export const CHANGE_URL = "CHANGE_URL";
export const CHANGE_DB = "CHANGE_DB";
export const LOADING__START = "LOADING__START";
export const LOADING__STOP = "LOADING__STOP";


export const changeURL = (payload) => ({
    type: CHANGE_URL,
    payload
})

export const changeDB = (payload) => ({
    type: CHANGE_DB,
    payload
})

export const loadingStart = () => ({
    type: LOADING__START
})

export const loadingStop = () => ({
    type: LOADING__STOP
})