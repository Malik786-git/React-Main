import React, { Component } from 'react'
// import { Consumer } from './ContextFile'; //  it is comment for only COntextType, not for other case...
// without ContextApi...

// export default class GuestContext extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.name2}</h1>
//       </div>
//     )
//   }
// }
// import { MyContext } from './context'

// get value...
// export default class GuestContext extends Component {
//   render() {
//     return (
//       <div>
//       <MyContext.Consumer>
//           {data => <h1>Name: {data.name} and RollNo: {data.rollNo}</h1>}
//       </MyContext.Consumer>
//       </div>
//     )
//   }
// }

// get value and function to update state...


// export default class GuestContext extends Component {
//   render() {
//     return (
//       <div>
//       <MyContext.Consumer>
//           {
//               ({data, UpdateFun}) => (
//                   <>
//                   <h1>Name: {data.name},RollNo {data.rollNo}</h1>
//                   <button onClick={UpdateFun}>increase</button>
//                   </>
//               )
//           }
//       </MyContext.Consumer>
//       </div>
//     )
//   }
// }



// for seperate context file ....
// export default class GuestContext extends Component {
//   render() {
//     return (
//       <div>
//       <Consumer>
//           {
//               ({data, UpdateFun}) => (
//                   <>
//                   <h1>Name: {data.name},RollNo {data.rollNo}</h1>
//                   <button onClick={UpdateFun}>increase</button>
//                   </>
//               )
//           }
//       </Consumer>
//       </div>
//     )
//   }
// }

// default value...
// export default class GuestContext extends Component {
//   render() {
//     return (
//       <div>
//       <Consumer>
//           {
//               (data) => <h1>Name: {data}</h1>  
//           }
//       </Consumer>
//       </div>
//     )
//   }
// }

// ContextType.. (user to make consumer more simple... here we no need to import consumer, )
import { MyContext } from './ContextFile';
export default class GuestContext extends Component {
  static contextType = MyContext;
  // this.context also use in lifecycle method, it is new feature in React not available 
  componentDidMount(){
    console.log(this.context); 
  }
  render() {
    // console.log(this.context);
    return (
      <div>
     
                  <h1>Name: {this.context.data.name},RollNo {this.context.data.rollNo}</h1>
                  <button onClick={this.context.UpdateFun}>increase</button>
      </div>
    )
  }
}
