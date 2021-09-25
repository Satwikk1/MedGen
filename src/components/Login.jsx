import React from 'react';

import "firebase/app";
import { auth } from '../functions/firebase';
import firebase from "firebase/compat/app";


import '../styles/main.scss';

const Login = () => {
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
                                    () => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())

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
