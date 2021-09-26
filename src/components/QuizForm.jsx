import React, { useState } from 'react'

import "../styles/main.scss";

const QuizForm = () => {
    const [questionSet, setQuestionSet] = useState([])
    const [tempOptions, setTempOptions] = useState([]);
    const [hoption, setHoption] = useState('');
    const [hOptionState, setHOptionState] = useState(false);
    const [tempQuestion, setTempQuestion] = useState(null);
    const [title, setTitle] = useState('Untitled');
    const [disp, setDisp] = useState(null);
    const [difficulty, setDifficulty] = useState(1);
    const [tags, setTags] = useState(null);
    const [time, setTime] = useState(null);

    return (
        <div className="quiz-form-body">
            <div className="heading-container">
                <div className="input-holder">
                    <input onChange={
                        (e)=>{
                            setTitle(e.target.value);
                        }
                    } type="text" style={{width: (title.length+1)*16 + 'px'}} className="heading" value={title} onKeyPress={"this.style.width = ((this.value.length + 1) * 8) + 'px';"}/>
                </div>
            </div>
            <div className="disp-container">
                <h1 className="heading">Discription</h1>
                <textarea onChange={
                    (e)=>setDisp(e.target.value)
                } placeholder="description">{disp}</textarea>
            </div>
            <div className="difficulty">
                <h1 className="heading">difficulty</h1>
                <div className="stars">
                    <span onClick={()=>setDifficulty(5)} className={difficulty<=5?"material-icons selected-star":"material-icons"}>star</span>
                    <span onClick={()=>setDifficulty(4)} className={difficulty<=4?"material-icons selected-star":"material-icons"}>star</span>
                    <span onClick={()=>setDifficulty(3)} className={difficulty<=3?"material-icons selected-star":"material-icons"}>star</span>
                    <span onClick={()=>setDifficulty(2)} className={difficulty<=2?"material-icons selected-star":"material-icons"}>star</span>
                    <span onClick={()=>setDifficulty(1)} className={difficulty<=1?"material-icons selected-star":"material-icons"}>star</span>
                </div>
                <h1 className="star-status">{
                   difficulty>=1?difficulty>=2?difficulty>=3?difficulty>=4?difficulty>=5?"Peice Of Cake":"Easy":"Moderate":"Hard":"Very Hard":"Out Of Scope"
                }</h1>
            </div>

            <div className="questions-container">
                {
                    questionSet.map((item, index)=>{
                        return(
                            <div className="question-body">
                                <div className="question-count"><h1>{index+1}.</h1></div>
                                <div className="question-text-container">
                                    <p>{item[0]}</p>
                                </div>
                                <div className="filled-options">
                                    {
                                        item[1].map((item1)=>{
                                            return<p className={item1[1]?"text-success lead":null}>{item1[0]}</p>
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className="question-body">
                    {/* <div className="question-count"><h1>1.</h1></div> */}
                    <div className="question-text">
                        <textarea onChange={(e)=>setTempQuestion(e.target.value)} value={tempQuestion} placeholder="question text"></textarea>
                    </div>
                    <div className="options">
                        {tempOptions.map((item, index)=>{
                            return(
                                <div>
                                    <p className={item[1]?"text-success lead": null}>{item[0]}</p>
                                </div>
                            )
                        })}
                        <div className="add-option">
                            <div className="option-form">
                                <input onChange={(e)=>setHOptionState(e.target.checked)} checked={hOptionState} className="form-check-input checkbox" type="checkbox" />
                                <input className="text-input" onChange={(e)=>setHoption(e.target.value)} value={hoption} placeholder="option" type="text" />
                            </div>
                            <button onClick={
                                ()=>{
                                    let temp = [...tempOptions]
                                    temp.push([hoption, hOptionState])
                                    setTempOptions(temp);
                                    setHoption('');
                                    setHOptionState(false);
                                }
                            }>Add option</button>
                        </div>
                    </div>
                </div>
                <div className="form-footer">
                    <div className="publish-quiz">
                        <button onClick={
                            // handle submit logic here
                            (e)=>{e.preventDefault();}
                        }>Publish</button>
                    </div>
                    <div className="add-questions-btn">
                        <button onClick={()=>{
                            let temp = [...questionSet]
                            temp.push([tempQuestion, tempOptions])
                            setQuestionSet(temp)
                            setTempOptions([]);
                            setTempQuestion('');
                        }}>Add question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {QuizForm}
