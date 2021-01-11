import React, { Suspense, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header'
import Loading from './components/Loading/Loading';
import Login from './components/Login/Login';
import Connected from './components/Connected/Connected';

import Requests from './Requests/Requests';

import './App.css'


const App = () => {
    const [session, setSession] = useState({
        code: store.getState().session,
        OK: false
    }),
        compareFunc = (res) => {
            if (res === session.code) {
                setSession({
                    ...session,
                    OK: true
                })
                return true;
            }
        },
        postFunc = () => {
            Requests.POST('session', { code: session.code })
                .then(res => res.json())
                .then(res => compareFunc(res))
        };
    if (!session.OK) {
        postFunc()
    }

    localStorage.setItem('session', session.code)


    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Suspense fallback={<Loading />}>
                        <Header />
                        {store.getState().loggedIn && (
                            <Redirect to="/connected">
                                <Connected />
                            </Redirect>
                        )}
                        <Route path="/connected"><Connected /></Route>
                        <Route exact path="/"><Login /></Route>
                    </Suspense>
                </Switch>
            </Provider>
        </BrowserRouter>
    )

}
export default App;