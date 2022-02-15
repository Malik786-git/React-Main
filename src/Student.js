import React, {Component} from "react"


// // function component
// function Student(props){
//     return <h1>Hello {props.name}</h1>
// }

// class component
class Student extends Component {
    render(){
        return <h1>Hello {this.props.name}</h1>;
    }
}


export default Student;
