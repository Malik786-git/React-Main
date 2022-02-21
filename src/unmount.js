import React, {Component} from 'react'

export default class Unmount extends Component{
    componentDidMount(){
        console.log('Mounte');
    }
    render(){
        return <h1>Hello Unmounte</h1>
    }
}