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

// with context api, here no need to pass prop from here to guest....
export default class UserContext extends Component {
    render() {
      return (
        <div>
          <GuestContext/>
        </div>
      )
    }
  }
  