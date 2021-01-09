export const CHANGE_URL = "CHANGE_URL";
export const CHANGE_DB = "CHANGE_DB";

export const changeURL = (payload) => ({
    type: CHANGE_URL,
    payload
})

export const changeDB = (payload) => ({
    type: CHANGE_DB,
    payload
})