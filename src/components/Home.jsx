import React, { useEffect, useState } from 'react';

import { Navbar } from './Navbar';
import { Posts } from './Posts';
import { FeedsForm } from './FeedsForm';
import '../styles/main.scss';

import QuizForm from './quiz/QuizForm';
import DisplayQuiz from './quiz/DisplayQuiz';

const Home = (props) => {
    const [createFeedToggler, setCreateFeedToggler] = useState(false);
    const [refreshFeeds, setrefreshFeeds] = useState(false);
    return (
        <div className="main-container">
            <Navbar setToggler={setCreateFeedToggler}/>
            {
                createFeedToggler?<FeedsForm setToggler={setCreateFeedToggler} setRefresh={setrefreshFeeds} />:<Posts setRefresh={setrefreshFeeds} refresh={refreshFeeds} />
            }

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