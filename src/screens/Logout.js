import React, { useEffect } from 'react';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';

function Logout(props) {
    const firebase = useFirebase();
    useEffect(() => {
        firebase.logout();
    }, []);
    return <h1>Byebye</h1>;
}

export default Logout;
