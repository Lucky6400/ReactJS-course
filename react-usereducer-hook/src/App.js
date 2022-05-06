import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  /*
  action: action that will be dispatched
  */

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1}
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'newUserInput':
      return { ...state, userInput: action.payload } 
      // action.payload is the value we are taking from the input
    case 'toggleColor':
      return { ...state, color: !state.color }
    default:
      throw new Error();
  }
}


/* THE BENIFIT OF DEFINING THE FOLLOWING CONSTANTS IS TO AVOID THE TYPOS */

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TOGGLE_COLOR: 'toggleColor',
}

/*************************************************************************/

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: 'white' });
  /*
  dispatch: send an action
  
  */
  return (
    <>
      <div className="container">
        <div className="w-100 row bg-primary justify-content-center align-items-center p-lg-5">
          <div className="col-lg-3 bg-danger border border-dark p-3 text-center">
            <input 
            type="text"
            value={state.userInput} 
            onChange={(e)=>{dispatch({ type: ACTION.NEW_USER_INPUT , payload: e.target.value })}} 
            className="form-control my-2"
             />
             <h6
             className="text-white"
             >{!state.userInput?'Type in the input box to change me': state.userInput}</h6>
            <h3 style={{color: state.color ? 'white': 'black'}} className="my-3">{state.count}</h3>
            <button onClick={()=>{dispatch({type: ACTION.INCREMENT})}} className="btn btn-dark rounded-0 mx-2">Increment</button>
            <button onClick={()=>{dispatch({type: ACTION.DECREMENT})}}className="btn btn-dark rounded-0 mx-2">Decrement</button>
            <button onClick={()=>{dispatch({type: ACTION.TOGGLE_COLOR})}} className="btn btn-dark rounded-0 mx-2 my-2">Toggle Color</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
