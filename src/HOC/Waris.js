import React, { Component } from 'react'
import Army from './WithArms';

// class Waris extends Component {
 
//     render() {
//     return (
//       <div>
//         <h1
//         onMouseOver={this.props.handler}
//         >Waris {this.props.hocGunName} Gunshots {this.props.hocGunShots}</h1>
//       </div>
//     )
//   }
// }

// export default Army(Waris, 10);

// get props from HOC.js

class Waris extends Component {
 
    render() {
    return (
      <div>
       <h1>camp: {this.props.hocCamp}</h1>
        <h1
        onMouseOver={this.props.handler}
        >Waris {this.props.hocGunName} Gunshots {this.props.hocGunShots}</h1>
      </div>
    )
  }
}

export default Army(Waris, 10);
