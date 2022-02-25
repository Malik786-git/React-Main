import React, { Component } from 'react'

// export default class List extends Component {
//   render() {
//       const arr = [10,20,30,40];
      
//       const newArr = arr.map( num => {
//       return <li>{num}</li>
//     });

//     console.log('oldArray', arr); // no change it is in original form...
//     console.log('newArray', newArr); // but it is array of object and with react JSX
    
//     return (
//       <ul>
//       {/* <li>{arr[0]}</li>
//       <li>{arr[1]}</li>
//       <li>{arr[2]}</li>
//       <li>{arr[3]}</li> */}

//       {/* or using map code is  optimize..*/}
//         {newArr}

//       </ul>
//     )
//   }
// }



// inbinding map in JSX...

// export default class List extends Component {
//   render() {
//       const arr = [10,20,30,40];

//     return (
//       <ul>
//         { arr.map(num => (<li>{num*2}</li>)) }
//       </ul>
//     )
//   }
// }


// // using props....
// export default class List extends Component {
//   render() {
//       const arr = this.props.numbers;

//     return (
//       <ul>
//         { arr.map(num => (<li>{num*2}</li>)) }
//       </ul>
//     )
//   }
// }

// for state using map.....

export default class List extends Component {
    render() {
        const arr = this.props.numbers;
  
      return (
        <ul>
          { arr.map(num => (<li>{num*2}</li>)) }
        </ul>
      )
    }
  }
  