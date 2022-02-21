import React, {Component} from 'react'

export default class Unmounting extends Component{
    componentDidMount(){
        console.log('Mounting');
    }
    componentWillUnmount(){
        console.log('app unmounted');
    }
    render(){
        console.log('Unmounting render');
        return <h1>Hello Unmounting</h1>
    }
}

