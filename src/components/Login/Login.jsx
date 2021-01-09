import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import './Login.css'

import { changeDB, changeURL, loadingStart, loadingStop } from '../../redux/actions'
import store from '../../redux/store'

import Requests from '../../Requests/Requests';

function Login(props) {
    const [errorURL, setErrorURL] = useState(false),
        [errorDB, setErrorDB] = useState(false),
        history = useHistory(),
        handleURLChange = (e) => {
            store.dispatch(changeURL(e.target.value))
            const err = !store.getState().URL.match(/^(mongodb)[+]srv:/)
            setErrorURL(err);
        },
        handleDBchange = (e) => {
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
    return (
        <div className='login__page'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input url__field">
                    <label htmlFor="URL">Enter the {'<mongosrc://>'} url:
                    <span className="error_text">{errorURL && <div>*</div>}</span>
                    </label>
                    <input type="text" style={errorURL ? { borderColor: '#b93c0a' } : {}} onChange={e => handleURLChange(e)} name="URL" />
                </div>
                <div className="input db__field">
                    <label htmlFor="URL">Enter the {'<database>'} name:
                    <span className="error_text">{errorDB && <div>*</div>}</span>
                    </label>
                    <input type="text" style={errorDB ? { borderColor: '#b93c0a' } : {}} onChange={e => handleDBchange(e)} name="DB" />
                </div>
                <input disabled={errorDB || errorURL} type="submit" value="Enter" onClick={e => handleSubmit(e)} />
            </form>
        </div>
    )
}

export default Login;