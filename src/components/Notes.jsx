import React, { useState } from 'react'

import '../styles/main.scss';

const Notes = () => {

    const [toggle, setToggle] = useState(true);

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

            </div>
            <div className="add-form">
                <textarea className="notes-notedown-field" placeholder="explore your head"></textarea>
                <div className="add-btn">
                    <span class="material-icons">add_circle</span>
                </div>
            </div>
        </div>
    )
}

export {Notes}
