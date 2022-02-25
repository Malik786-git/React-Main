import React, {Component} from 'react'

export default class Key extends Component {
    
    state = {
        user:[
            {id: 101, name:"mallik", password:"1352"},
            {id: 102, name:"ashar", password:"1112"},
            {id: 103, name:"owais", password:"1222"}
    ]
    }
    
    render() {
           const newUser = this.state.user.map(usr => {

               return (
                      <h1 key={usr.id}>ID: {usr.id} Name: {usr.name} Password: {usr.password}</h1>
               )
           })
      return (
        <div>
          {newUser}
        </div>
      )
    }
  }
  