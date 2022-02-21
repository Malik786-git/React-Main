import React, { Component } from 'react';

export default class Update extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mroll: this.props.roll
        }
    }
    // 1
    static getDerivedStateFromProps(props, state) {
        console.log('get derived method call');
        if (props.roll !== state.mroll) {
            return { mroll: props.roll };
        }
        return null; // if condition false return null;
    }
    // 2
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("shouldupdate call it", nextProps, nextState);
        if (this.state.mroll < 107) {
            return true;
        }
        return false;
    }
    // 3
     getSnapshotBeforeUpdate(prevProps, prevState){
         console.log("getSnap, it run before  update", prevProps, prevState);
         return 45; // third parameter is 45
        }
        componentDidUpdate(prevProps, prevState, snapshot){
         console.log("getSnap, it run after  update",snapshot, prevProps, prevState);

     }
      

    render() {
        return (
            <div>
                Roll No: {this.state.mroll}
            </div>
        )
    }
}

