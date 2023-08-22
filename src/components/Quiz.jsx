import React, { useState } from 'react'
import { data } from '../data'

function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(1);
    
    const changeQuestion = ()=>{
        if(currentQuestion < Object.keys(data).length){
            setCurrentQuestion(currentQuestion+1);
        }else{
            setCurrentQuestion(1)
        }
    }

  return (
    <div>
        <div className="container">
            <div className="card">
                <div className="column">
                    <h3>{data[currentQuestion].word}</h3>
                </div>
                <div className="line column"></div>
                <div className="column">
                    <h3>{data[currentQuestion].translate}</h3>
                </div>
            </div>
            <input 
                    type="button"
                    value="Next"
                    className="btn-next"
                    onClick={changeQuestion}/>
        </div>
    </div>)}

export default Quiz