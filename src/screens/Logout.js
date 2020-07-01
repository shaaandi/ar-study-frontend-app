import React, { useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';

function Logout(props) {
    const firebase = useFirebase();
    useEffect(() => {
        firebase.logout();
    }, [firebase]);
    return <h1>Byebye</h1>;
}

export default Logout;
