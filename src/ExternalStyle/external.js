import React, { Component } from 'react';
import './External.css';
import ExternalUser from './externalUser';


// export default class External extends Component {
//   render() {
//     return (
//       <>
//       {/* here both component have same color, because external css have same className, so after render whole css are minified version, so the second property of txt which color is purple is apply, so we need to use unique className */}
//         {/* external css file are global.  */}
//         <h1 className='txt'>Hello External Component... </h1>
//         <ExternalUser/> 
//       </>
//     )
//   }
// }

// for conditional situation...
// export default class External extends Component {
//   render() {
//       let style = false;
//     return (
//       <React.Fragment>
//         <h1 className='txt1'>Hello External Component... </h1>
//         <ExternalUser Colorr={style ? 'txt1' : 'txt2'}/>
//       </React.Fragment>
//     )
//   }
// }

// also..
export default class External extends Component {
  render() {
      let style = false;
    return (
      <React.Fragment>
      {/* here two classes property apply */}
        <h1 className='txtColor txtSize'>Hello External Component... </h1>
      </React.Fragment>
    )
  }
}

