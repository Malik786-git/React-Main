import React, { Component } from 'react'

export default class Error extends Component {
   state = {
       hasError: false
   }
   static getDerivedStateFromError(){
       return {hasError:true};
   }
   componentDidCatch(error, info){
       console.log(error, info); // use to save file to show which compnent throw error.
   }
    render() {
           if(this.state.hasError){
               return <h1>Error: image not fount.</h1>
           }
               return  this.props.children; 
  }
}
