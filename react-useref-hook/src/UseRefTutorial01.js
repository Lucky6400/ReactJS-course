import React from 'react'
import { useState, useRef } from 'react';

const UseRefTutorial01 = () => {


    const [randomInput, setRandomInput] = useState('');
    const iterations = useRef(0);
    
    const inputRef = useRef();
  
    const handleChange = (e) => {
      setRandomInput(e.target.value);
      iterations.current++;
    }
  
    const setFocusOnInput = () => {
      inputRef.current.focus();
    }



  return (
    <div className="container">
        <div className="row bg-success justify-content-center align-items-center pt-5 pb-5">
          <div className="col-lg-3 text-center">
            <input ref={inputRef} type="text" onChange={handleChange} className="form-control my-3" />
            <h3> <b>Iterations:</b>  {iterations.current}</h3>
            <p>{randomInput}</p>
            <button onClick={setFocusOnInput} className="btn btn-danger rounded-0">Focus On Input</button>
          </div>
        </div>
      </div>
  )
}

export default UseRefTutorial01
