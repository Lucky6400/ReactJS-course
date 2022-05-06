import React from 'react'
import { useState, useRef } from 'react';

const Timer = () => {

    const iterations = useRef(0);

    const [seconds, setSeconds] = useState(0);

    const timerID = useRef();

    const startTimer = () => {
        timerID.current = setInterval(() => {
            iterations.current++;
            setSeconds(prev => prev + 1) // set the state of seconds 1 more than the previous state
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(timerID.current);
        timerID.current = 0;
    }
    const resetTimer = () => {
        stopTimer();
        if(seconds){
            iterations.current++;
            setSeconds(0)
        }
    } 

    // always use the 'current' property to access the value of the reference
  return (
    <div className="container">
        <div className="row bg-primary justify-content-center align-items-center pt-5 pb-5">
          <div className="col-lg-3 text-center">
            <h3> <b>Iterations:</b>  {iterations.current}</h3>
            <p>{seconds}</p>
            <button onClick={startTimer} className="btn btn-danger mx-2 rounded-0">Start</button> <button onClick={stopTimer} className="btn btn-danger mx-2 rounded-0">Stop</button>
            <button onClick={resetTimer} className="btn btn-danger mx-2 rounded-0">Reset</button>
          </div>
        </div>
      </div>
  )
}

export default Timer
