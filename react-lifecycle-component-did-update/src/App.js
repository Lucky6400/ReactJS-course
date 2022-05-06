import React, { Component } from 'react'

export class App extends Component {


  constructor() {
    super()
    console.log("app is initialized")
    this.state ={
      player: "Virat Kohli",
      update: ""
    }
  }

  // --------  this is the method with state ------- //

  // componentDidUpdate(){
  //   console.log("componentDidUpdate worked")
  // } 

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.table(prevState);
  } // this returned the previous state of the component


  //! we cannot use setState here without a condition. If we do, it will make an indefinite loop

  render() {
    return (
      <div className="container pt-5">
        <div className="alert w-100  alert-primary m-0 rounded-0">
          componentDidUpdate(){}
        </div>
        <div className="alert w-100 alert-secondary m-0 rounded-0">
          Whenever there is any updation in the component, this method will start working. We can use prevProps, prevState, snapShot (or whatever names you wanna give) as parameters in this method. prevState obviously returns the previous state of the component when the component updates.
        </div>
        <div className="bg-dark text-white p-2 w-100 text-center">
          {this.state.player}
        </div>
        <div className="bg-warning w-100 text-center">
            {this.state.update}
        </div>
        <button onClick={() => this.setState({player:"Gautam Gambhir", update: "Player Updated, check console for the task performed in this lifecycle method."})} className="btn btn-success rounded-0">Update Name</button>
      </div>
    )
  }
}

export default App
