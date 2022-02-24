import React, { Component } from 'react'

export default class Guest1 extends Component {
  render() {
    return (
      <div>
        <h1>Wecome Guest plz logIn</h1>
        <button type='button' onClick={this.props.clickBtnEvent}>Login</button>
      </div>
    )
  }
}
