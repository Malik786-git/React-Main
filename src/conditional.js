import React, { Component } from 'react'
import User from './conditional2'
import Guest from './conditional3'


export default class Conditional extends Component {
    
  render() {
     
    const isRegistered = this.props.consumer;
    if (isRegistered) {
        return <User/>;
    }

    return <Guest/>;
  }
}
