import React, { Component } from 'react'
import Styles from './User.module.css'
import StylesTwo from './App.module.css'

export default class UserModule extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={Styles.heading}>User Here!</h2>
        <h2 className={StylesTwo.heading}>UserTwo Here!</h2>
      </React.Fragment>
    )
  }
}
