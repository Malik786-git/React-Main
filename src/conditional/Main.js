import React, { Component } from 'react'
import Guest1 from './Guest'
import User1 from './User'


export default class Maine extends Component {
    state = {
        Register: true
    }

    logOut = () => {
        this.setState({ Register: false })
    }

    logIn = () => {
        this.setState({ Register: true })
    }

    render() {

        // 1. // here we user condition before return and after render method.
        // if (this.state.Register) {
        //     return <User1 clickBtnEvent={this.logOut} />;
        // } else {
        //     return <Guest1 clickBtnEvent={this.logIn} />;
        // }

        // 2. recommended // because here we use condition inside the return 
        // return (
        //     <div>
        //          {
        //             this.state.Register ?  <User1 clickBtnEvent={this.logOut} /> 
        //                                 :  <Guest1 clickBtnEvent={this.logIn} />
        //          }
        //     </div>
        // )  

        // 3. not recommended // but sometime very usefull here we write all type of js code inside the return.. 
        return (
            <div>
                {
                    (() => {
                        if (this.state.Register) {
                            return <User1 clickBtnEvent={this.logOut} />;
                        } else {
                            return <Guest1 clickBtnEvent={this.logIn} />;
                        }
                    })()
                }
            </div>
        )
    }
}
