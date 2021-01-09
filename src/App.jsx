import React, { Suspense, useState } from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import store from './redux/store';

import Loading from './components/Loading/Loading';

import './App.css'
import Requests from './Requests/Requests';
import Connected from './components/Connected/Connected';

const LoadableLogin = Loadable({
    loader: () => import('./components/Login/Login'),
    loading: Loading
})
const LoadableHeader = Loadable({
    loader: () => import("./components/Header/Header"),
    loading: Loading
})

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
        <Suspense fallback={<Loading />}>
            <Provider store={store}>
                {session.OK ? (
                    <React.Fragment>
                        <LoadableHeader />
                        {store.getState().loggedIn ? (
                            <LoadableLogin />
                        ) : (
                                <Connected />
                            )}
                    </React.Fragment>
                ) : (
                        <Loading />
                    )}
            </Provider>
        </Suspense>
    )

}
export default App;