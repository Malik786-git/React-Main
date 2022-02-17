import React, { Component } from 'react';
// *Directly inside class
// class State extends Component {
//     state = {
//         name: "malik",
//         roll: this.props.rollNo  // so here roll is immutable so it is change. 
//     }
//     render(){
//         return (
//             <h1>Hello {this.state.name}, your roll No is {this.state.roll}</h1>
//         )
//     }
// }

// *Inside the Constructor
class State extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            name: "malik",
            roll: this.props.rollNo 
        }
    }

    render(){
        return (
            <h1>Hello {this.state.name}, your roll No is {this.state.roll}</h1>
        )
    }
}

export default State;


