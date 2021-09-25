import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../functions/firebase';

import { useAuth } from '../functions/contexts/AuthContext';

const Home = () => {
    const history = useHistory();
    const { user } = useAuth();

    console.log(user);

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    // useEffect(() => {
    //     if(!user) {
    //         history.push('/');

    //         return;
    //     }
    // }, [user, history])


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
        </div>
    )
}

export {Home};