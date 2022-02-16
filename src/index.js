import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Student from './Student';
import el from './JSXElement';
import Props from "./Props";
import Children from './JSXchild';
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
ReactDOM.render(
  <Children>this is children</Children>,
  document.getElementById('root')
);




