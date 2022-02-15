import { render } from '@testing-library/react';
import React, { Component, Fragment } from 'react';
import Teacher from './Teacher';
import Student from './Student';

// 1
// class App extends Component {
//   // we donot give multiple tag in render method;
//   render(){
//     return (<h1>Hello World</h1>
//     <h1>Hello World</h1>;
//     )}
// }


// 2
// class App extends Component {
// //  but here we use extra div...
//   render(){
//     return (
//     <div>
//     <h1>Hello World</h1>
//     <h1>Hello World</h1>
//     </div>
//     )}
// }


// 3
// class App extends Component {
// // here we not use to add extra div, we use Fragment so the problem is solved to add multiple tags.
//   render(){
//     return (
//     <React.Fragment>
//        <h1>Hello World</h1>
//        <h1>Hello World</h1>
//     </React.Fragment>
   
//     )}
// }

// 4
// class App extends Component {
// // here we not use React.Fragment, we only write Fragment because we import Fragment.
//   render(){
//     return (
//     <Fragment>
//        <h1>Hello World</h1>
//        <h1>Hello World</h1>
//     </Fragment>

//     //  or
//     // this is more easly way to add fragment, but its not support all browser
//     // <>
//     //    <h1>Hello World</h1>
//     //    <h1>Hello World</h1>
//     // </>
   
//     )}
// }

// 5 Teacher Component...

const App = ()=>{    

     return (
       <div>
         <Teacher name = "one"/> 
         <Teacher name = "two"/> 
         <Teacher name = "three" /> 
      </div>
    )

}



export default App;

