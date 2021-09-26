import React, { useState, useEffect } from "react";
import {getUser, resetUserSession} from '../../utils/authService';

import { db } from '../../functions/database';

const PostForm = () => {

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
        })
        .then(() => {
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
        <div>
            <center>
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Add Your Post</h1>

                    <label>Title</label>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label>Message</label>
                    <textarea
                        placeholder="Add your Message here"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button
                        type="submit"
                        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                    >
                        Upload
                    </button>
                </form>
            </center>
        </div>
    )
}

export default PostForm
