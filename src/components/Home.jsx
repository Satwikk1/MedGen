import React, { useEffect } from 'react';

import { Navbar } from './Navbar';
import { Posts } from './Posts';
import '../styles/main.scss';

const Home = (props) => {

    return (
        <div className="main-container">
            <Navbar />
            <Posts />
        </div>
        


        // <div className="home-page">
        //     <div className="nav-bar">
        //         <div className="logo-tab">
        //             MedGen
        //         </div>
        //         {/* <div className="user-email">
        //             {user.email?user.email:null}
        //         </div> */}
        //         <div onClick={handleLogout} className="logout-tab">
        //             Logout
        //         </div>
        //     </div>

        //     <div>
        //         <PostForm />

        //         <hr/>

        //         <DisplayPost />
        //     </div>
        // </div>
    )
}

export {Home};