import React, { Component } from 'react'
import pic from '../python.jpg'
// Image in public foldre
export default class Assets extends Component {
  render()
   {
    return (
      <div>
        <img 
        src={process.env.PUBLIC_URL + '/psl.jpg'} 
        alt = 'pslPicture'
        width='200px' />
      </div>
    )
  }
}

// Image in src folder
// export default class Assets extends Component {
//   render()
//    {
//     return (
//       <div>
//         <img 
//         src={pic} 
//         alt = 'pslPicture'
//         width='200px' />
//       </div>
//     )
//   }
// }
