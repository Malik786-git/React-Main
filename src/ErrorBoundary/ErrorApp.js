import React, { Component } from 'react';
import boy1 from './boy1.jpg';
import boy2 from './boy2.jpg';
import Image from './Image'
import Error from './Error';
// export default class ErrorApp extends Component {
//   render() {
//     return (
//       <div>
//       <Error>
//         <Image boy = {boy1}/>
//         <Image boy = {boy2}/>
//         <Image boy = 'noImage'/>
//       </Error>
//       </div>
//     )
//   }
// }


export default class ErrorApp extends Component {
  render() {
    return (
      <div>
        <Error>
          <Image boy={boy1} />
        </Error>
        <Error>
          <Image boy={boy2} />
        </Error>
        <Error>
          <Image boy='noImage' />
        </Error>
      </div>
    )
  }
}
