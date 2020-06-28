import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import reducer from './store/reducers';

// firebase config;
const ENV = process.env.NODE_ENV;
const API_KEY =
    ENV === 'production'
        ? process.env.REACT_APP_API_KEY
        : process.env.REACT_APP_API_KEY_DEV;
const AUTH_DOMAIN =
    ENV === 'production'
        ? process.env.REACT_APP_AUTH_DOMAIN
        : process.env.REACT_APP_AUTH_DOMAIN_DEV;
const DB_URL =
    ENV === 'production'
        ? process.env.REACT_APP_DATABASE_URL
        : process.env.REACT_APP_DATABASE_URL_DEV;
const PROJECT_ID =
    ENV === 'production'
        ? process.env.REACT_APP_PROJECT_ID
        : process.env.REACT_APP_PROJECT_ID_DEV;
const STORAGE_BUCKET =
    ENV === 'production'
        ? process.env.REACT_APP_STORAGE_BUCKET
        : process.env.REACT_APP_STORAGE_BUCKET_DEV;
const MESSAGING_SENDER_ID =
    ENV === 'production'
        ? process.env.REACT_APP_MESSAGING_SENDER_ID
        : process.env.REACT_APP_MESSAGING_SENDER_ID_DEV;
const APP_ID =
    ENV === 'production'
        ? process.env.REACT_APP_APP_ID
        : process.env.REACT_APP_APP_ID_DEV;

const fbConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DB_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

// react-redux-firebase config;
const rrfConfig = {
    userProfile: 'users',
};

firebase.initializeApp(fbConfig);

const initialState = {};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools()
    // applyMiddleware(...middleware)
    // other store enhancers if any
);

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
