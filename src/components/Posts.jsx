import React, { useState, useEffect } from "react";

import { db } from '../functions/database';
import { getUser } from '../utils/authService';
import PostForm from './feeds/post_form';
import DisplayPost from './feeds/display_post';
import '../styles/main.scss';

const Posts = () => {
    
    const [switcher, setSwitcher] = useState(true);
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
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
        });
  
      // return cleanup function
      return () => fetchPostFromFirebase();
    }, [loading]); // empty dependencies array => useEffect only called once
  
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
                                        <p>{item.displayName==='undefined'?item.displayName:"test name"}</p>
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

                    </div>
                )
            }
        </div>
    )
}

export {Posts}
