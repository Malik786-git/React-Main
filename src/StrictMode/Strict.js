import React, { Component, StrictMode } from 'react'
import StrictUser from './StrictUser'

export default class Strict extends Component {
  render() {
    return (
      <div>
      <StrictMode>
        <StrictUser/>
      </StrictMode>
      </div>
    )
  }
}
