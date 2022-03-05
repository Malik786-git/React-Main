import React, { Component } from 'react'
import StrictUser from './StrictUser'

export default class Strict extends Component {
  render() {
    return (
      <div>
      <React.StrictMode>
        <StrictUser/>
      </React.StrictMode>
      </div>
    )
  }
}
