import React, { Component } from 'react'
import KeyUser from './keyUser'


export default class KeyApp extends Component {
  render() {
      const arr = this.props.numbers
      const newArr = arr.map((num)=>{
              return <KeyUser key={num} value={num}/> 
            //   here key is not pass as a props attribute.
      })
    return (
      <div>
        <ul>{newArr}</ul>
      </div>
    )
  }
}

