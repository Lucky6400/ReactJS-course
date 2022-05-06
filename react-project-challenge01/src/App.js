import { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('white')


  return (
    <>
      <div className="row justify-content-center align-items-center pt-5">
        <div style={{ height: "200px", background: `${color}` }} className="col-lg-3 rounded-3 border border-dark">
        {color}
        </div>
        <div className="col-lg-3">
          <input 
          type="text" 
          value={color} 
          onChange={(e)=> setColor(e.target.value)} 
          name="color" 
          id="color" 
          className="form-control" />
        </div>

      </div>

    </>

  );
}

export default App;
