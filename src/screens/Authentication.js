import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebaseui from 'firebaseui';
// import { useHistory } from 'react-router-dom'; // if you use react-router
// import GoogleButton from 'react-go3ogle-button' // optional

function Authentication() {
    const firebase = useFirebase();

    return (
        <div>
            <StyledFirebaseAuth
                uiConfig={{
                    signInFlow: 'popup',
                    signInSuccessUrl: '/',
                    signInOptions: [
                        {
                            provider:
                                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                        },
                    ],
                    callbacks: {
                        signInSuccessWithAuthResult: (
                            authResult,
                            redirectUrl
                        ) => {
                            firebase
                                .handleRedirectResult(authResult)
                                .then(() => {
                                    // history.push(redirectUrl); if you use react router to redirect

                                    if (
                                        authResult.additionalUserInfo
                                            .isNewUser === true
                                    ) {
                                        // performm necessary profile updates here;
                                        let { displayName } = authResult.user;
                                        firebase.updateProfile({
                                            fullname: displayName,
                                        });
                                    }
                                });
                            return false;
                        },
                    },
                    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
                }}
                uiCallback={(ui) => console.log(ui)}
                firebaseAuth={firebase.auth()}
            />
        </div>
    );
}

export default Authentication;
