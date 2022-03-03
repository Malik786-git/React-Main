import React, { Component } from 'react'
import LiftingUser from './LiftingUser'

export default class LiftingApp extends Component {
          state = {
              name: 'malik'
          }  
    render() {
    return (
      <div>
        <LiftingUser name={this.state.name}/>
      </div>
    )
  }
}
