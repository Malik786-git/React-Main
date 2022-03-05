import React, { Component } from 'react';
import Army from './WithArms';

// class Ali extends Component {
//     state = {
//         gunshots: 0
//     };
//     handleGunshots = ()=>{
//          this.setState({gunshots:this.state.gunshots+1})   
//     }
//     render() {
//     return (
//       <div>
//         <h1
//         onMouseOver={this.handleGunshots}
//         >Ali {this.props.hocGunName} Gunshots {this.state.gunshots}</h1>
//       </div>
//     )
//   }
// }

// export default Army(Ali);

// get props from HOC.js
class Ali extends Component {
  
    render() {
        // console.log(this.props.camp); // here it is undefie
    return (
      <div>
      {/* here camp not show , because camp not pass ali.js it is pass to WithArms.*/}
       <h1>camp: {this.props.hocCamp}</h1>
        <h1
        onMouseOver={this.props.handler}
        >Ali {this.props.hocGunName} Gunshots {this.props.hocGunShots}</h1>
      </div>
    )
  }
}

export default Army(Ali,5);
