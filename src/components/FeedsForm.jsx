import React, { useState } from 'react'

import { Navbar } from './Navbar';
import { getUser } from '../utils/authService';
import { db } from '../functions/database';
import '../styles/main.scss';

const FeedsForm = (props) => {

    const user = getUser();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("Posts")
        .add({
            Title: title,
            senderUid: user.uid,
            message: message,
            displayName: user.displayName
        })
        .then(() => {
            props.setToggler(false);
            props.setRefresh(true);
            setLoader(false);
            alert("Post Uploaded 👍");
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setTitle("");
        setMessage("");
    };

    return (
        <div className="feed-form-container container">
            <div className="form-body">
                <div className="form-heading">
                    <div className="title-bar m-0">
                        <h1 className="m-0">Title</h1>
                    </div>
                    <div className="title-input m-0">
                        <textarea onChange={(e)=>setTitle(e.target.value)} className="m-0" type="text"/>
                    </div>
                </div>
                <div className="form-content">
                    <div className="title-bar">
                        <h1 className="m-0">Content</h1>
                    </div>
                    <div className="content-input m-0">
                        <textarea onChange={(e)=>setMessage(e.target.value)} className="m-0" type="text"/>
                    </div>
                </div>
                <div className="controls">
                    <div className="cancle">
                        <button onClick={
                            ()=>{
                                props.setToggler(false);
                            }
                        }>Cancle</button>
                    </div>
                    <div className="post">
                        <button onClick={
                            handleSubmit
                        }>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {FeedsForm}
