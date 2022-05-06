import React, { Component } from 'react'
import NewComp from './NewComp'

export class App extends Component {


  constructor() {
    super()
    console.log("app is initialized")
    this.state = {
      show: true
    }
  }

  

  render() {
    return (
      <div className="container pt-5">
        <div className="alert w-100  alert-primary m-0 rounded-0">
          componentWillUnmount(){}
        </div>
        <div className="alert w-100 alert-secondary m-0 rounded-0">
        When a component is destroyed, this lifecycle method starts working.
        </div>

        {this.state.show ?<NewComp/>: <p className="alert alert-success w-100 p-3 m-0 rounded-0">componentWillUnmount worked and you destroyed that innocent component. Also I am visible because that component was destroyed. That is how this method works. Destroy a component and this method will start working. I am not a text in that component, I am a conditional render in App component and the component that you killed was NewComp.js. Kindly check the console to see what happened when the component was destroyed. This render is not related to componentWillUnmount lol.</p> }
        
        <button onClick={() => {this.setState({show: false})}} className="btn btn-danger rounded-0">Destroy</button>
      </div>
    )
  }
}

export default App
