import { db } from '../../functions/database';
import React, { useState, useEffect } from "react";

const DisplayPost = () => {

    const [loading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState([]);
  
    useEffect(() => {
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
          setLoading(false);
        });
  
      // return cleanup function
      return () => fetchQuizFromFirebase();
    }, [loading]); // empty dependencies array => useEffect only called once
  
    if (loading) {
      return <h1>loading firebase quiz data...</h1>;
    }

	return (
		<div className="container">
            <h1>Quiz are Displayed Here</h1>
            <br />
            {
                quiz.length > 0 ? (
                    quiz.map(
                        (quiz_data) => 
                                <div key={quiz_data.key} >

                                    <h3> {quiz_data.title} </h3>
                                    <p> {quiz_data.disp} </p>
                                    <hr />

                                </div>
                    )
                ) : (
                    <h1>no Quiz Found :(</h1>
                )
            }
        </div>

	);
}

export default DisplayPost;
