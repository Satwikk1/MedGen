import React from 'react'
import { getAuth } from 'firebase/auth';
import { useHistory } from 'react-router';

import {resetUserSession} from '../utils/authService';
import '../styles/main.scss';

const Navbar = (props) => {

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
        <div className="home-container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/home"><span className="brand-bold">Med</span>Gen</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="search-bar m-auto">
                            <input style={{width: "400px"}} type="text" className="form-control" placeholder="search" />
                            <div className="search-btn">
                                <span class="material-icons">search</span>
                            </div>
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li>
                                <a href="/profile" className="text-white nav-link">Profile</a>
                            </li>
                            <li>
                                <a onClick={
                                    ()=>{
                                        props.setToggler(true);
                                    }
                                } className="text-white nav-link">Create Feed</a>
                            </li>
                            {/* <li>
                                <a href="/createQuiz" className="text-white nav-link">Create Quiz</a>
                            </li> */}
                            <li>
                                <a onClick={handleLogout} className="text-white nav-link">Logout</a>
                            </li>
                            <li>
                                <div className="profile-logo">
                                    <span className="material-icons">account_circle</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export {Navbar}
