import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import themeReducer from './themeReducer';

export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    theme: themeReducer,
});
