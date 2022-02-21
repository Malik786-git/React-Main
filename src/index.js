import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Student from './Student';
import el from './JSXElement';
import Props from "./Props";
import Children from './JSXchild';
import State from "./State";
import Event from "./Event";
import UpdateState from "./updateState";
import Studentss from "./Eventargu";
import Mounting from './Mounting';
// app component
// ReactDOM.render(
//     <App/>,
//   document.getElementById('root')
// );


// Student component
// ReactDOM.render(
//     <Student name="Students"/>,
//   document.getElementById('root')
// );


// JSX component

// ReactDOM.render(
//   el,
//   document.getElementById('root')
// );


// Props...
// ReactDOM.render(
//   <Props name="malik" roll = {38} />,
//   document.getElementById('root')
// );



// JSX children
// ReactDOM.render(
//   <Children>this is children</Children>,
//   document.getElementById('root')
// );


// States 
// ReactDOM.render(
//   <State rollNo='38'/>,
//   document.getElementById('root')
// )



// Events

// ReactDOM.render(
//   <Event roll={38}/>,
//   document.getElementById('root')
// )


// UpdateState
// ReactDOM.render(
//   <UpdateState roll="37"/>,
//   document.getElementById('root')
// )



// Event Argument..

// ReactDOM.render(
//   <Studentss roll="38"/>,
//   document.getElementById('root')
// )


// Mounting
ReactDOM.render(
  <Mounting name="this is mounting props"/>,
  document.getElementById('root')
)