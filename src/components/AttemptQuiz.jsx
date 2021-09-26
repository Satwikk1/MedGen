import React, { useState } from 'react'

import '../styles/main.scss';

const AttemptQuiz = (props) => {

    const [submit, setSubmit] = useState(false);
    const [score, setScore] = useState(0);
    const [options, setOptions] = useState(()=>{
        let temp = []
        props.selectedQuiz.questions.map(item=>{
            let temp2 = []
            item.options.map(()=>{
                temp2.push(false);
            })
            temp.push(temp2)
        })
        return temp
    })

    return (
        <div className="attempt-quiz-container container">
            {submit?
                <div className={score>0.5?"score good-perform": "score bad-perform"}>
                    <p className="text-white">your score is: {score*100} %</p>
                    <div className="go-back">
                        <button onClick={()=>{
                            props.setAttempting(false);
                        }}>Go Home</button>
                    </div>
                </div>
            :null}
            <div className="quiz-header">
                <div className="heading">
                    <h1>{props.selectedQuiz.title}</h1>
                </div>
                <div className="disp">
                    <p>{props.selectedQuiz.disp}</p>
                </div>
            </div>
            {
                props.selectedQuiz.questions.map((item, index)=>{
                    return(
                        <div className="question-container">
                            <div className="question-text">
                                <h1>{item.question}</h1>
                            </div>
                            <div className="options">
                                {
                                    item.options.map((item1, index1)=>{
                                        return(
                                            <div className="option">
                                                {
                                                    submit?
                                                    <div className="d-flex">
                                                        <input onChange={(e)=>{
                                                            let temp = [...options]
                                                            temp[index][index1]=e.target.checked
                                                            setOptions(temp)
                                                        }} type="checkbox" 
                                                        // style={
                                                                // options[index][index1]? (item1.status?"bg-success p-5":"bg-danger") :item1.status?"bg-success p-5":"bg-danger"
                                                                // item1.status?{backgroundColor: "green"}:{backgroundColor: "green"}
                                                            // }
                                                        />
                                                        <p 
                                                        className={options[index][index1]? (item1.status?"text-success font-weight-bold":"text-danger font-weight-bold") :item1.status?"text-success font-weight-bold":"text-danger font-weight-bold"}
                                                        >{item1.txt}</p>
                                                    </div>
                                                    :
                                                    <div className="d-flex">
                                                        <input onChange={(e)=>{
                                                            let temp = [...options]
                                                            temp[index][index1]=e.target.checked
                                                            setOptions(temp)
                                                        }} type="checkbox"/>
                                                        <p className>{item1.txt}</p>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {/* {submit?
                                <div className={()=>{
                                    let correct = true;
                                    for(let i=0; i<options[index].length; i++){
                                        if(options[index][i]!=item.questions[index].options[i].status){
                                            correct=false;
                                            break;
                                        }
                                    }
                                    if(correct){
                                        return "bg-success"
                                    }else{
                                        return "bg-danger"
                                    }
                                }}>
                                    <p style={{width: 'fit-content'}}>correct</p>
                                </div>
                                :
                                null
                            } */}
                        </div>
                    )
                })
            }
            {
                !submit?
                <div className="controls">
                <div className="submit">
                    <button onClick={()=>{
                        let correctQues = 0;
                        props.selectedQuiz.questions.map((item, index)=>{
                            let temp = true;
                            item.options.map((item1, index1)=>{
                                if(options[index][index1]!==item1.status){
                                    temp=false;
                                }
                            })
                            if(temp){
                                correctQues=correctQues+1
                            }
                        })
                        setScore(correctQues/options.length);
                        setSubmit(true);
                        console.log(score);
                    }}>Submit</button>
                </div>
            </div>
                :
                null
                
            }
        </div>
    )
}

export {AttemptQuiz}
