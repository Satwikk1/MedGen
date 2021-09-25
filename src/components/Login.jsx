import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { setUserSession } from '../utils/authService';
import '../styles/main.scss';
import { useHistory } from 'react-router';

function SignIn(history){
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID
    };
    const app = initializeApp(firebaseConfig);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUserSession(user.auth.currentUser);
        history.push('/home');
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
const Login = () => {

    const history = useHistory();

    return (
       <div className="auth-container">
           <div className="about"></div>
           <div className="card-container">
                <div className="card-body">
                    <div className="login">
                        <h1 className="login-heading">Login</h1>
                        <div className="email">
                            <div className="login-logo"><span class="material-icons">account_circle</span></div>
                            <input type="email" placeholder="Email"></input>
                        </div>
                        <div className="password">
                            <div className="login-logo"><span class="material-icons">password</span></div>
                            <input type="password" placeholder="Password"></input>
                        </div>
                        <div className="submit">
                            <button onClick={
                                // handle login logic
                                ()=>{}
                            }>Login</button>
                        </div>
                        <div className="divider">
                            <div className="hr"></div>
                            <h2>or</h2>
                            <div className="hr"></div>
                        </div>
                        <div className="socialAuth">
                            <div className="gmail">
                                <button onClick={
                                    () => {
                                        // auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(res=>{
                                        //     console.log(res);
                                        // });

                                        SignIn(history);
                                    }
                                }
                                >Gmail</button>
                            </div>
                            <div className="github">
                                <button onClick={
                                    // handle social auth logic
                                    ()=>{}
                                }>GitHub</button>
                            </div>
                        </div>
                    </div>
                    <div className="signup">
                        <div className="heading">
                            <h1 onClick={
                                // trigger signup animation
                                ()=>{}
                            }>SignUp?</h1>
                        </div>
                    </div>
                </div>
           </div>
       </div> 
    )
}

export { Login }
