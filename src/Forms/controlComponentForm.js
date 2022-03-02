import React, { Component } from 'react'

// export default class ControlComponent extends Component {
//   render() {
//     return (
//       <div>
//         <form>
//             <h2>Controlled By React</h2>
//             {/* here value assign permanent, because it is props, user cannot edit input field */}
//             <input type='text' value='Enter Name'></input>  
//             <input type='text' defaultValue='Enter Name'></input>  
//         </form>         
//       </div>
//     )
//   }
// }

// also to control input field data.....
// export default class ControlComponent extends Component {
  
//   state = {
//       value:"Enter Name"
//   }
//    changeHandle = (e)=>{
//        console.log('change', e.target.value);
//        this.setState({value:e.target.value.toUpperCase().substr(0,10)})
//    }
//  render() {
//     return (
//       <div>
//         <form>
//             <h2>Controlled By React</h2>
//             <input 
//              type='text' 
//              value={this.state.value} 
//              onChange={this.changeHandle}></input>  
//         </form>         
//       </div>
//     )
//   }
// }

// for text area...
// export default class ControlComponent extends Component {
  
//   state = {
//       value:"Add some notes here for my feedback"
//   }
//    changeHandle = (e)=>{
//        this.setState({value:e.target.value})
//    }
//  render() {
//     return (
//       <div>
//         <form>
//             <h2>Controlled By React</h2>
//             <textarea  
//              value={this.state.value} 
//              onChange={this.changeHandle}>
//              </textarea>  
//         </form>         
//       </div>
//     )
//   }
// }

//handle multiple input elements...
// export default class ControlComponent extends Component {
  
//   state = {
//       name:"malik",
//       password: '8881212#'
//   }
//    changeHandle = (e)=>{
//     //    console.log(e.target.name); // get the name of input field.
//     //    console.log([e.target.name]); // get the name of input field.
       
//     //    this.setState({ [e.target.name]:e.target.value.substr(0,20)})
//         //  if we want only password must be in uppercase..
//         const value = e.target.name === 'password' ? e.target.value.toUpperCase() : e.target.value;
//         this.setState({[e.target.name]: value})
//     }

//  render() {
//     return (
//       <div>
//         <form>
//             <lable>
//                 Name: 
//                 <input type='text' value={this.state.name}  name='name'onChange={this.changeHandle}/>
//             </lable>
//              <br/>
//             <lable>
//                 Password: 
//                 <input type='text' value={this.state.password} name='password' onChange={this.changeHandle}/>
//             </lable>
//              <br/>
//         </form>         
//       </div>
//     )
//   }
// }

// handling form in React Js
export default class ControlComponent extends Component {
  
    state = {
        name:'',
        password: ''
    }
     changeHandle = (e)=>{
        this.setState({ [e.target.name]:e.target.value.substr(0,20)})
      }
    handleSubmit = (e)=>{
        console.log(e);
        console.log(e.target[1]);
        console.log(e.target[1].value);
        e.preventDefault()
        // here we write validation or other task....

    }
   render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <lable>
                  Name: 
                  <input type='text' value={this.state.name}  name='name'onChange={this.changeHandle}/>
              </lable>
               <br/>
              <lable>
                  Password: 
                  <input type='text' value={this.state.password} name='password' onChange={this.changeHandle}/>
              </lable>
               <br/>
               <br/>
                <input type='submit' value='Submit'/>
          </form>         
        </div>
      )
    }
  }
  