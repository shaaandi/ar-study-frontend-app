import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Home, Authentication, Logout, Book } from './screens';
import { Loading } from './components';
import { useSelector } from 'react-redux';

// configuration of enviroment virables;
let domain = '';
if (process.env.NODE_ENV === 'production') {
    domain = `/${process.env.REACT_APP_PROD_DOMAIN}`;
}

const App = (props) => {
    const { isLoaded, isEmpty } = useSelector(
        (state) => state.firebase.profile
    );

    if (!isLoaded) {
        return <Loading />;
    }

    if (isEmpty) {
        return (
            <Router>
                <Switch>
                    <Route
                        path={`${domain}/signup`}
                        component={() => <h1>Singup</h1>}
                    />
                    <Route
                        path={`${domain}/login`}
                        component={Authentication}
                    />
                    <Redirect path={`${domain}/`} to="/login" />
                </Switch>
            </Router>
        );
    }

    return (
        <Router>
            <Switch>
                <Route path={`${domain}/logout`} component={Logout} />
                <Route path={`${domain}/dashboard`} component={Home} />
                <Route path={`${domain}/books/:bookId`} component={Book} />
                <Redirect path={`${domain}/`} to="dashboard" />
            </Switch>
        </Router>
    );
};

export default App;
