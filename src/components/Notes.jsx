import React, { useState, useEffect } from 'react';
import {getUser, resetUserSession} from '../utils/authService';

import { db } from '../functions/database';

import '../styles/main.scss';

const Notes = () => {

    const user = getUser();

    const [message, setMessage] = useState("");
    const [toggle, setToggle] = useState(true);

    const [loading, setLoading] = useState(true);
    const [fetchedNotes, setfetchedNotes] = useState([]);
  
    useEffect(() => {
      const getNotesFromFirebase = [];
      const fetchNotesFromFirebase = db
        .collection("Notes").where("senderUid", "==", user.uid)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            getNotesFromFirebase.push({
              ...doc.data(),
              key: doc.id,
            });
          });
          setfetchedNotes(getNotesFromFirebase);
          setLoading(false);
        });
  
      // return cleanup function
      return () => fetchNotesFromFirebase();
    }, [loading]); // empty dependencies array => useEffect only called once
  
    if (loading) {
      return <h1>loading notes data...</h1>;
    }

    return (
        <div className={toggle?"notes-main-container":"notes-main-container collasped"}>
            <div className="d-flex">
                <div onClick={()=>{
                    setToggle(!toggle);
                }} className="toggler">
                    <span style={toggle?{color: "rgb(245, 220, 0)"}:null} className="material-icons">lightbulb</span>
                </div>
                <div className="notes-heading">
                    <h1>Notes</h1>
                </div>
            </div>


            <div className="notes-list">
                {
                    fetchedNotes.map(
                        (note) => {
                            return(
                                <div className="single-note" >
                                    <h3> {note.message} </h3>
                                    {/* <p> {note.senderName} </p> */}
                                    <hr />
                                </div>
                            )
                        }
                    )
                }
            </div>


            <div className="add-form">
                <hr />

                <textarea className="notes-notedown-field"
                    placeholder="explore your head"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <div className="add-btn">
                    <span class="material-icons"
                        onClick={
                            (e)=>{
                                e.preventDefault();
                                
                                db.collection("Notes")
                                .add({
                                    message: message,
                                    senderName: user.displayName,
                                    senderUid: user.uid,
                                    timestamp: new Date()
                                })
                                .then(() => {
                                    alert("Notes Added");
                                })
                                .catch((error) => {
                                    alert(error.message);
                                });

                                setMessage("");
                            }
                        }

                    >add_circle</span>
                </div>
            </div>
        </div>
    )
}

export {Notes}
