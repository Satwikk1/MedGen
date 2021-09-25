import React, { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { Redirect, useHistory } from 'react-router';

import {getUser, resetUserSession} from '../utils/authService';

import PostForm from './feeds/post_form';
import DisplayPost from './feeds/display_post';

const Home = (props) => {
    const history = useHistory();
    const handleLogout = async () => {
        const auth = getAuth();
        await auth.signOut().then(()=>{
            resetUserSession();
            history.push('/');
        }).catch(err=>{
            console.log(err);
        });
    }



    return (
        <div className="home-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    MedGen
                </div>
                {/* <div className="user-email">
                    {user.email?user.email:null}
                </div> */}
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <div>
                <PostForm />

                <hr/>

                <DisplayPost />
            </div>
        </div>
    )
}

export {Home};