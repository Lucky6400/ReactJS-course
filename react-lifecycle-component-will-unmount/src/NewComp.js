import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewComp extends Component {
  
    componentWillUnmount(){
        console.log("componentWillUnmount worked.") // this method works when the component is destroyed
    }
  render() {
    return (
      <>
      <div className="bg-success text-white p-3 w-100 text-center fw-bold">
          <h3>I am just a component bro, please don't kill me.</h3>
      </div>
      
      </>
    )
  }
}

export default NewComp