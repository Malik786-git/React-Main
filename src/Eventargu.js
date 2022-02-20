import React, { Component } from 'react'

// class Studentss extends Component {
    
//     constructor(props){
//           super(props);
//           this.state = {
//               id: "1",
//               name:"malik", 
//               roll: this.props.roll
//           }
//     }
  
//     fun = (id, e) =>console.log("successful",id, e);
  
//     funArgu = (e)=> this.fun(this.state.id, e);  
  
//     render(){
//         return(
//             <div>
//             <h1>Hello {this.state.name}</h1>
//             <button onClick={this.funArgu}>Click Here</button>
//             </div>
//         )
//     }
// }
// OR
class Studentss extends Component {
    
    constructor(props){
          super(props);
          this.state = {
              id: "1",
              name:"malik", 
              roll: this.props.roll
          }
    }
  
    fun = (id, e) =>console.log("successful",id, e);
  
     
  
    render(){
        return(
            <div>
            <h1>Hello {this.state.name}</h1>
            <button 
            onClick={
                (e)=> this.fun(this.state.id, e)
                }
                >
                Click Here
                </button>
            </div>
        )
    }
}

export default Studentss;
