import React, { Component } from 'react'
import Update from '../update';
import UserContext from './UserContext'
// without ContextApi...
// export default class Context extends Component {
//     state = {
//         name: 'Malik'
//     }
//   render() {
//     return (
//       <div>
//         <UserContext name={this.state.name}/>
//       </div>
//     )
//   }
// }

// export const MyContext = React.createContext(); // here we export it, to import any component and acces the state value in it.
//  pass data..
// export default class Context extends Component {
//     state = {
//         name: 'Malik',
//         rollNo: 38
//     }
//   render() {
//     return (
//       <div>
//         <MyContext.Provider value={this.state}>
//             <UserContext/>
//         </MyContext.Provider>
//       </div>
//     )
//   }
// }

// pass data and function to update state....
// export default class Context extends Component {
//     state = {
//         name: 'Malik',
//         rollNo: 38
//     }
//     HandleClickContext = () =>{
//         this.setState({rollNo: this.state.rollNo+1})
//     }
//   render() {
    
//     const contextValue = {
//         data: this.state,
//          UpdateFun: this.HandleClickContext 
//     }

//     return (
//       <div>
//         <MyContext.Provider value={contextValue}>
//             <UserContext/>
//         </MyContext.Provider>
//       </div>
//     )
//   }
// }
// for sperate COntext file to make code optimize...

// import { Provider } from './ContextFile';

// export default class Context extends Component {
//     state = {
//         name: 'Malik',
//         rollNo: 38
//     }
//     HandleClickContext = () =>{
//         this.setState({rollNo: this.state.rollNo+1})
//     }
//   render() {
    
//     const contextValue = {
//         data: this.state,
//          UpdateFun: this.HandleClickContext 
//     }

//     return (
//       <div>
//         <Provider value={contextValue}>
//             <UserContext/>
//         </Provider>
//       </div>
//     )
//   }
// }

// default value...
// import { Provider } from './ContextFile';

// export default class Context extends Component {
//     state = {
//         name: 'Malik',
//         rollNo: 38
//     }
//     HandleClickContext = () =>{
//         this.setState({rollNo: this.state.rollNo+1})
//     }
//   render() {
    
//     const contextValue = {
//         data: this.state,
//          UpdateFun: this.HandleClickContext 
//     }

//     return <UserContext/>
//   }
// }
// Context Type...

import { Provider } from './ContextFile';

export default class Context extends Component {
    state = {
        name: 'Malik',
        rollNo: 38
    }
    HandleClickContext = () =>{
        this.setState({rollNo: this.state.rollNo+1})
    }
  render() {
    
    const contextValue = {
        data: this.state,
         UpdateFun: this.HandleClickContext 
    }

    return (
      <div>
        <Provider value={contextValue}>
            <UserContext/>
        </Provider>
      </div>
    )
  }
}