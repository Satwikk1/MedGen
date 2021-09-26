import React, { useState, useEffect } from "react";

import { db } from '../functions/database';
import { getUser } from '../utils/authService';
import PostForm from './feeds/post_form';
import DisplayPost from './feeds/display_post';
import '../styles/main.scss';

const Posts = (props) => {
    
    const [switcher, setSwitcher] = useState(true);
    const [loading, setLoading] = useState(true);
    // const [loadingQuiz, setLoadingQuiz] = useState(true);
    const [quiz, setQuiz] = useState([]);
    const [posts, setPosts] = useState([]);

    function fetchQuiz(){
        const getQuizFromFirebase = [];
        const fetchQuizFromFirebase = db
            .collection("Quiz")
            .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getQuizFromFirebase.push({
                ...doc.data(),
                key: doc.id,
                });
            });
            setQuiz(getQuizFromFirebase);
            props.setRefreshQuiz(false);
            // setLoadingQuiz(false);
            });
    
        // return cleanup function
        return () => fetchQuizFromFirebase();
    }

    function fetch(){
        const getPostsFromFirebase = [];
        const fetchPostFromFirebase = db
            .collection("Posts")
            .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                getPostsFromFirebase.push({
                ...doc.data(),
                key: doc.id,
                });
            });
            setPosts(getPostsFromFirebase);
            setLoading(false);
            props.setRefresh(false);
            });
            return () => fetchPostFromFirebase();
    }
    if(props.refresh){
        fetch()
    }
    if(props.refreshQuiz){
        fetchQuiz();
    }
    useEffect(() => {
      fetch();
      fetchQuiz();
    }, []); // empty dependencies array => useEffect only called once
  
    if (loading) {
      return <h1>loading firebase data...</h1>;
    }

    return (
        <div className="posts-container container">
            <div className="switcher">
                <div onClick={()=>setSwitcher(true)} className={switcher?"selected-btn feeds-btn me-2":"feeds-btn me-2"}><span>Feeds</span></div>
                <div onClick={()=>setSwitcher(false)} className={!switcher?"selected-btn quiz-btn ms-2":"quiz-btn ms-2"}><span>Quiz</span></div>
            </div>
            {
                switcher?(
                    <div className="feeds">
                        {posts.map((item)=>{
                            return(
                                <div className="feed-body">
                                    <div className="user-name">
                                        <span class="material-icons">account_circle</span>
                                        <p>{item.displayName}</p>
                                    </div>
                                    <div className="feed-details">
                                        <div className="feed-heading">
                                            <h1>{item.Title}</h1>
                                        </div>
                                        <div className="feed-message">
                                            <p className="lead">{item.message}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ):(
                    <div className="quiz">
                        {
                            quiz.map((item)=>{
                                return(
                                    <div className="feed-body">
                                        <div className="user-name">
                                            <span class="material-icons">account_circle</span>
                                            <p>{item.senderName}</p>
                                        </div>
                                        <div className="feed-details">
                                            <div className="feed-heading">
                                                <h1>{item.title}</h1>
                                            </div>
                                            <div className="feed-message">
                                                <p className="lead">{item.disp}</p>
                                            </div>
                                            <div className="quiz-footer">
                                                <div className="ques-no">
                                                    <b><p>Questions: {item.questions.length}</p></b>
                                                </div>
                                                <div className="difficulty d-flex">
                                                    <p className="p-0 m-0 me-2">difficutly: </p>
                                                    {item.difficulty===5?
                                                    <div>
                                                        <span class="material-icons text-warning">grade</span>
                                                    </div>
                                                    :null}
                                                    {item.difficulty===4?
                                                    <div>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                    </div>
                                                    :null}
                                                    {item.difficulty===3?
                                                    <div>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                    </div>
                                                    :null}
                                                    {item.difficulty===2?
                                                    <div>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                    </div>
                                                    :null}
                                                    {item.difficulty===1?
                                                    <div>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                        <span class="material-icons text-warning">grade</span>
                                                    </div>
                                                    :null}
                                                </div>
                                                <div className="attempt-btn">
                                                    <button onClick={()=>{props.setSelectedQuiz(item); props.setAttempting(true)}}>Attempt</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export {Posts}
