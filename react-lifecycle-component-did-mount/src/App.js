import React, { Component } from 'react'

export class App extends Component {


  constructor() {
    super()
    console.log("app is initialized")
  }

  componentDidMount() {
    console.log(`
    componentDidMount(){}
  |----------------------------------------------------------------|
  |      THIS METHOD DOES SOMETHING WHEN COMPONENT IS MOUNTED.     |
  |----------------------------------------------------------------|
    `)
  }

  render() {
    return (
      <div className="container pt-5">
        <div className="alert w-100  alert-primary m-0 rounded-0">
          componentDidMount(){}
        </div>
        <div className="alert w-100 alert-secondary m-0 rounded-0">
        THIS METHOD DOES SOMETHING WHEN COMPONENT IS MOUNTED. <br />
        THIS IS A PERFECT METHOD FOR API CALLS.
        THIS METHOD IS CALLED AFTER THE HTML DOM IS GENERATED.
        </div>
      </div>
    )
  }
}

export default App
