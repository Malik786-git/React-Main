import React, { Component } from "react";

const Army = (Men, bullet) => {
    class NewMen extends Component {
        state = {
            gunshots: 0
        };
        handleGunshots = () => {
            this.setState({ gunshots: this.state.gunshots + bullet })
        }
        render() {
            console.log(this.props.camp);
            return <Men
                hocGunName='AK47'
                hocGunShots={this.state.gunshots}
                handler={this.handleGunshots}
                hocCamp = {this.props.camp}
            />
        }
    }
    return NewMen;
}

export default Army;
