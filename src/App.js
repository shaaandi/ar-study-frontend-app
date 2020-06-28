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
                    <Route path="/signup" component={() => <h1>Singup</h1>} />
                    <Route path="/login" component={Authentication} />
                    <Redirect path="/" to="/login" />
                </Switch>
            </Router>
        );
    }

    return (
        <Router>
            <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/dashboard" component={Home} />
                <Route path={'/books/:bookId'} component={Book} />
                <Redirect path="/" to="dashboard" />
            </Switch>
        </Router>
    );
};

export default App;
