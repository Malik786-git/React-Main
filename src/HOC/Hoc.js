import React, { Component } from 'react'
import Ali from './Ali'
import Waris from './Waris'

// export default class Hoc extends Component {
   
//   render() {
//     return (
//       <div>
//         <Ali/>
//         <Waris/>
//       </div>
//     )
//   }
// }
// pass props.
export default class Hoc extends Component {
   
  render() {
    return (
      <div>
        <Ali camp='101'/>
        <Waris camp='102'/>
      </div>
    )
  }
}
