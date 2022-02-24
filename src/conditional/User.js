import React, { Component } from 'react'

export default class User1 extends Component {
  render() {
    return (
      <div>
        <h1>Wecome Malik</h1>
        <button type='button' onClick={this.props.clickBtnEvent}>Logout {this.props.clickBtnEvent}</button>
        
      </div>
    )
  }
}
