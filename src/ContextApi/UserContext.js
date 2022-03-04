import React, { Component } from 'react'
import GuestContext from './GuestContext'
// without ContextApi...

// export default class UserContext extends Component {
//   render() {
//     return (
//       <div>
//         <GuestContext name2={this.props.name}/>
//       </div>
//     )
//   }
// }

export default class UserContext extends Component {
    render() {
      return (
        <div>
          <GuestContext/>
        </div>
      )
    }
  }
  