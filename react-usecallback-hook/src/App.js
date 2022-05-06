import { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {

  const [userInput, setUserInput] = useState('')
  const [result, setResult] = useState(0)
  const [num1] = useState(6);
  const [num2] = useState(9);

  const sum = useCallback( () => num1 + num2, [num1, num2]);
  // we used comma and added dependencies [num1, num2] because useCallback uses dependency array
  // if any hook is using a function as a dependency array, we need to wrap that function in a useCallback hook
  // so useCallback is used to prevent endless loops
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);
  useEffect(() => {
    console.log(`Resultant array is ${buildArray()}`);
    // setResult(sum());
  }, [buildArray])

  //! The 'sum' function makes the dependencies of useEffect Hook change on every render
  return (
    <>
      <div className="row justify-content-center align-items-center pt-5">
        <div className="col-lg-3 p-3 bg-danger">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            name="userInput"
            id="userInput"
            className="form-control" />
        </div>

      </div>

    </>

  );
}

export default App;
