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
import Updating from './Updating';
import Unmounting from './unmounting';
import Unmount from './unmount';
import UseState from "./useState";
import UseEffect from "./useEffect";
import Custom from './customHook';
import Conditional from './conditional';
import InlineApp from './inline2'
import Maine from './conditional/Main';
import List from './list/list';
import Key from './keys/key';
import KeyApp from './keys/keyApp';
import InlineStyle from './Styling/inlineStyle';
import External from './ExternalStyle/external';
import AppModule from './cssModule/AppModule';
import Assets from './useAssets/Assets';
import AddBootstrap from './AddBootstrap/bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ControlComponent from './Forms/controlComponentForm';
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
// ReactDOM.render(
//   <Mounting name="this is mounting props"/>,
//   document.getElementById('root')
// )

// Updating
// ReactDOM.render(
//   <Updating/>,
//   document.getElementById('root')
// )


// Unmountng
// ReactDOM.render(
//   <Unmounting/>,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <Unmount/>,
//   document.getElementById('stu')
// )
// // now we unmount root element
// ReactDOM.unmountComponentAtNode(document.getElementById('root'));


// ------------------------------------------------------------------
// Hooks in React.. 
// useState
// ReactDOM.render(
//   <UseState/>,
//   document.getElementById('root')
// )

// // useEffect
// ReactDOM.render(
//   <UseEffect/>,
//   document.getElementById('root')
// )


// // custom hook
// ReactDOM.render(
//   <Custom/>,
//   document.getElementById('root')
// )

// // conditional statement..
// ReactDOM.render(
//   <Conditional consumer={true}/>,
//   document.getElementById('root')
// )

// Inline condition..
// ReactDOM.render(
//   <InlineApp member={true}/>,
//   document.getElementById('root')
// )

// practice condition 
// ///////////////////////////////////
// ReactDOM.render(
//   <Maine/>,
//   document.getElementById('root')
// )
//////////////////////////////////////


// list in react
// for props example in list.js...
// const arrValues = [10, 20, 30, 40];

// ReactDOM.render(
//   <List numbers={arrValues}/>,
//   document.getElementById('root')
// )



// Key in Reack
// ReactDOM.render(
//   <Key/>,
//   document.getElementById('root')
// )
// const arrValue = [10, 20, 30, 40];
// ReactDOM.render(
//   <KeyApp numbers={arrValue}/>,
//   document.getElementById('root')
// )


// Inline style..
// ReactDOM.render(
//   <InlineStyle/>,
//   document.getElementById('root')
// )

// External style..
// ReactDOM.render(
//   <External/>,
//   document.getElementById('root')
// )

// External style..
// ReactDOM.render(
//   <AppModule/>,
//   document.getElementById('root')
// )

// Use Assets in React..
// ReactDOM.render(
//   <Assets/>,
//   document.getElementById('root')
// )

// add bootstrap.
// ReactDOM.render(
//   <AddBootstrap/>,
//   document.getElementById('root')
// )

// FORMS
// controled component..
ReactDOM.render(
  <ControlComponent/>,
  document.getElementById('root')
)