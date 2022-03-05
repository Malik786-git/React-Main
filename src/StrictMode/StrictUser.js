import React, { Component } from 'react'

export default class StrictUser extends Component {
    // here we use method which is not use in future..
  
    componentWillMount(){
        console.log("Willmount"); 
      }
  render() {
    return (
      <div>
        <h1>User Component</h1>
      </div>
    )
  }
}
