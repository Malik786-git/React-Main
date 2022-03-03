import React, { Component } from 'react'


// export default class UncontrolComponent extends Component {
//     constructor(props){
//         super(props);
//         //creating ref
//         this.textInput  = React.createRef();
//     }
//     componentDidMount = ()=>{
//         console.log(this.textInput);
//         console.log(this.textInput.current);
//         this.textInput.current.focus(); // field focus.

//     }
//   render() {
//     return (
//       <div>
//         <form>
//             Name: <input type="text" />
//             <br/>
//             <br/>
//             Password: <input type="text" ref={this.textInput}/>
//             <br/>
//             <br/>
//             Address: <input type="text"/>
//         </form>
//       </div>
//     )
//   }
// }


// chat app..

// export default class UncontrolComponent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value: ""
//         }
//         //creating ref
//         this.textInput  = React.createRef();
//     }
//          handlerSubmit = (e)=>{
//              e.preventDefault();
//              console.log(this.textInput.current.value);
//              this.setState({value: this.textInput.current.value})
//          }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handlerSubmit}>
//         <h1>You type: {this.state.value}</h1>
//              Input:<input type="text" ref={this.textInput} />
//                   <input type="submit" value="Submit"/>
//      </form>
//       </div>
//     )
//   }
// }
// callback refs..

export default class UncontrolComponent extends Component {
    constructor(props){
        super(props);
        this.backRef = null;
        this.setBackRef = element => {
               this.backRef = element;
        };
    }
       componentDidMount = ()=>{
           if (this.backRef) {
               this.backRef.focus();
           }
       }

  render() {
    return (
      <div>
         <form>
             Name: <input type="text" />
             <br/>
             <br/>
             Password: <input type="text" ref={this.setBackRef}/>
             <br/>
             <br/>
             Address: <input type="text"/>
        </form>
      </div>
    )
  }
}