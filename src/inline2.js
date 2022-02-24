import React, { Component } from 'react'
import InlineUser from './inline';

export default class InlineApp extends Component {
  render() {

    const primeMember = this.props.member;
    return (
      <>
          <h1>Welcome User</h1>
          {primeMember && <InlineUser/>}
      </>
    )
  }
}
