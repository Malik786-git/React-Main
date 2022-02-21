import React, { Component } from 'react';
import Mount from './mount';

// constructor...

// export default class Mounting extends Component {

//     constructor(props){
//         super(props);
//         console.log('app-constructor called');
//         console.log(props);
//     }


//     render(){
//         return(
//             <div>
//                  Hello  Mounting 
//             </div>
//         )
//     }
// }


// static getDerivedStateFromProps()
export default class Mounting extends Component {

    constructor(props){
        super(props);
        console.log('app-constructor called');
        console.log(props);
        
        this.state = {
            roll:"101"
        }
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('app-getDerivedMethod called');
        console.log(props, state);
        return null;
    }
    render(){
        return(
            <div>
                <Mount name="mounting for static fun"/> 
            </div>
        )
    }
}


