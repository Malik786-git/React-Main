import React, { Component } from 'react';

// class Event extends Component {

//      constructor(props){
//          super(props);
//          this.state = {
//              roll: this.props.roll
//          }
//          this.fun1 = this.fun1.bind(this);
//      }

//     fun1() {
//         console.log(this.state.roll, "hello"); // here this is undefine, it not refer to current class, to solve this problem we use arrow fun. or bind method in constructor
//     }
    
//     fun2 = ()=>{ // in arrow fun this inherit automatically, so we not need to bind it.
//         console.log(this.state.roll, "world"); // here this work..
//     }


//     render() {
//         return (
//             <div>
//                 <h1>Hello Malik</h1>
//                 <button onClick={this.fun1}>Click for fun1</button>
//                 <button onClick={this.fun2}>Click for fun2</button>
//             </div>
//         )
//     }
// }

// event in function component

const Event = (props)=>{
 
    
    const fun1 = ()=> { 
        console.log("hello world", this); // here this has no meaning, because it is func. so this is undefine.
    }

    

    return (
        <div>
            <h1>Hello Malik, your roll No {props.roll}</h1>
            <button onClick={fun1}>Click for fun1</button>
        </div>
    )
}




export default Event;

