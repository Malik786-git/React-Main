import React, { Component } from 'react'
import UserModule from './UserModule'
import Styles from './App.module.css'

export default class AppModule extends Component {
  render() {
    return (
      <>
        <h1 className={Styles.heading}>App Here!</h1>
        <UserModule/>
      </>
    )
  }
}
