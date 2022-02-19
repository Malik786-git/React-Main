import React, { Component } from 'react'

class Studentss extends Component {
    
    constructor(props){
          super(props);
          this.state = {
              name:"malik", 
              roll: this.props.roll
          }
    }
    fun = ()=>{
       console.log("successful");
    }
    render(){
        return(
            <div>
            <h1>Hello {this.state.name}</h1>
            <button onClick={this.fun}>Click Here</button>
            </div>
        )
    }
}

export default Studentss;