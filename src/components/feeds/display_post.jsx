import { db } from '../../functions/database';
import React, { useState, useEffect } from "react";

const DisplayPost = () => {

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
		<div className="container">
            <h1>Post are Displayed Here</h1>
            <br />
            {
                posts.length > 0 ? (
                    posts.map(
                        (post) => 
                                <div key={post.key} >

                                    <h3> {post.Title} </h3>
                                    <p> {post.message} </p>
                                    <hr />
                                </div>
                    )
                ) : (
                    <h1>no Posts yet :(</h1>
                )
            }
        </div>

	);
}

export default DisplayPost;
