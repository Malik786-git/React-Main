import React, { Component } from 'react'
import Update from './update'
export default class Updating extends Component {

    constructor(){
        super();
        
        this.state = {
            roll: 101
        }
    }
    clickHandler = () => {
        console.log("btn enter");
        // this.setState({roll:102})
        // or
        this.setState({roll:this.state.roll +1})
    }
    render(){
        return(
            <div>
                 <Update roll={this.state.roll}/>
                 <button onClick = {this.clickHandler}>click to update</button>
            </div>
        )
    }
}
