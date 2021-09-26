import React, { useEffect, useState } from 'react';

import { Navbar } from './Navbar';
import { Posts } from './Posts';
import { FeedsForm } from './FeedsForm';
import { Notes } from './Notes';
import { AttemptQuiz } from './AttemptQuiz';
// import { QuizForm } from './quiz/QuizForm';
import '../styles/main.scss';

import QuizForm from './quiz/QuizForm';
import DisplayQuiz from './quiz/DisplayQuiz';

const Home = (props) => {
    const [createFeedToggler, setCreateFeedToggler] = useState(false);
    const [createQuizToggler, setCreateQuizToggler] = useState(false);
    const [refreshQuiz, setRefreshQuiz] = useState(false);
    const [refreshFeeds, setrefreshFeeds] = useState(false);
    const [selectedQuiz, setselectedQuiz] = useState(null);
    const [attempting, setAttempting] = useState(false);
    return (
        <div className="main-container">
            <Navbar setToggler={setCreateFeedToggler} setQuizToggler={setCreateQuizToggler}/>
            {
                attempting?
                <AttemptQuiz setAttempting={setAttempting} selectedQuiz={selectedQuiz} />
                :
                <div className="main-body">
                    {
                        createQuizToggler?
                        <QuizForm setQuizToggler={setCreateQuizToggler} setRefreshQuiz={setRefreshQuiz} />
                        :
                        createFeedToggler?<FeedsForm setToggler={setCreateFeedToggler} setRefresh={setrefreshFeeds} />:<Posts setSelectedQuiz={setselectedQuiz} setAttempting={setAttempting} setRefresh={setrefreshFeeds} refresh={refreshFeeds} setRefreshQuiz={setRefreshQuiz} refreshQuiz={refreshQuiz} />
                    }
                    <Notes />
                </div>
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