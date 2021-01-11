import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import './Login.css'

import { changeDB, changeURL, loadingStart, loadingStop } from '../../redux/actions'
import store from '../../redux/store'

import Loading from '../Loading/Loading'
import Requests from '../../Requests/Requests';
import InputSubmit from '../Others/Input/Submit/InputSubmit';
import InputText from '../Others/Input/Text/InputText';

function Login(props) {
    const [errorURL, setErrorURL] = useState(false),
        [errorDB, setErrorDB] = useState(false),
        [focused, setFocused] = useState({ URL: false, DB: false }),
        history = useHistory(),
        handleFocus = (e) => {
            setFocused({ ...focused, [e.target.name]: true })
        },
        handleBlur = (e) => {
            if (!e.target.value) {
                e.target.name === "URL" ? setErrorURL(true) : setErrorDB(true)
            }
        },
        handleURLChange = (e) => {
            store.dispatch(changeURL(e.target.value))
            const err = !store.getState().URL.match(/^(mongodb)[+]srv:/)
            setErrorURL(err);
        },
        handleDBChange = (e) => {
            store.dispatch(changeDB(e.target.value))
            const err = !store.getState().DB
            setErrorDB(err);
        },
        handleSubmit = (e) => {
            e.preventDefault();
            store.dispatch(loadingStart());
            try {
                Requests.POST('url', {
                    URL: store.getState().URL
                })
                    .then(res => res.json())
                    .then(data => console.log(data));
                Requests.POST('db', {
                    DB: store.getState().DB
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            } catch (err) {
                console.log(err)
            }
            history.push('/connected')
            store.dispatch(loadingStop())
        };
    return (<React.Fragment>

        {store.getState().loading ? (
            <Loading />
        ) : (

                <div className='login__page'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <InputText
                            name="URL"
                            label="Enter the 'mongodb:src//' url"
                            error={errorURL}
                            errorText="*"
                            handleChange={handleURLChange}
                            focusHandler={handleFocus}
                            blurHandler={handleBlur}
                        />
                        <InputText
                            name="DB"
                            label="Enter the '<database>' name:"
                            error={errorDB}
                            errorText="*"
                            handleChange={handleDBChange}
                            focusHandler={handleFocus}
                            blurHandler={handleBlur}
                        />
                        <InputSubmit
                            disabled={errorURL || errorDB || (!focused.URL || !focused.DB)}
                            handleSubmit={handleSubmit}
                        />
                    </form>
                </div>
            )}
    </React.Fragment>
    )
}

export default Login;