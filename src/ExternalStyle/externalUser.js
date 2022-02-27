import React, { Component } from 'react'
import './externalUser.css'

// export default class ExternalUser extends Component {
//   render() {
//     return (
//       <div>
//         <h1 className='txt'>Hello User Componet</h1>
//       </div>
//     )
//   }
// }

// for conditional situaltion...

export default class ExternalUser extends Component {
  render() {
    return (
      <div>
        <h1 className={this.props.Colorr}>Hello User Componet</h1>
      </div>
    )
  }
}
