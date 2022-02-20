import React from 'react';

class UpdateState extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            name: "malik",
            roll: this.props.roll
        };
    }
    
    fun = () =>{

        // this.setState({name:"jahangir", roll:"38"}); //take object to update state... 
        // and
        this.setState(function(state, props) {
            console.log(state, props);
        }); //take function as a argu..  

    };

    render(){

        return  (
        <div>
         <h1>Hello {this.state.name} and roll No. is {this.state.roll}</h1>
         <button onClick={this.fun}>click here</button>
        </div>
        )
    
    }
}

export default UpdateState;
