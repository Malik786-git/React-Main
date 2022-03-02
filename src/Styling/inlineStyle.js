import React, { Component } from 'react'

// export default class InlineStyle extends Component {
//   render() {
//       // style inline must be in render method out side the return 
//       const btnSyle = {
//           color: 'white',
//           backgroundColor: 'red'
//       }
//     return (
//       <div>
//         <button style={btnSyle}>Submit</button>
//       </div>
//     )
//   }
// }

// or apply two style property in one tag..

export default class InlineStyle extends Component {
  render() {
      // style inline must be in render method out side the return 
      const textColor = {
          color: 'white',
          backgroundColor: 'blue'
      }
      const textSize = {
          fontSize: '80px',
      }
    return (
      <div>
      {/* this is not valid no style is apply  */}
        {/* <h1 style={textColor, textSize}>Hello</h1> */}
        
         {/*so we use spread operator to apply both of style in h1  */}
        <h1 style={{...textColor,...textSize}}>Hello</h1>
      </div>
    )
}
}


// or

// export default class InlineStyle extends Component {
//   render() {
//       // style inline must be in render method out side the return 
//       const textColor = {
//           color: 'white',
//           backgroundColor: 'red'
//       }
     
//     return (
//       <div>
//         <h1 style={{...textColor,...{fontSize:'80px'}}}>Hello</h1>
//       </div>
//     )
// }
// }


//  now we add event to make it more attractive...
// here we want if i click on button, so the color of button will be change

// export default class InlineStyle extends Component {
    
//     state = {
//         change:false
//     }
//     clickHandler = ()=>{
//         this.setState({change:true})
//     }

//   render() {
//       // style inline must be in render method out side the return 
//       const btnStyle = {
//           color: 'blue',
//           backgroundColor: 'red'
//       }
//      if (this.state.change) {
//          btnStyle.backgroundColor = 'white';
//      }
//     return (
//       <div>
//         <button onClick={this.clickHandler} style={btnStyle}>Submit</button>
//       </div>
//     )
// }
// }

