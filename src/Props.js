import React, { Component } from "react";
import PropTypes from 'prop-types';

// const Props = props => {
//     return(
//         <div>
//             <h1>Your Roll No. {props.rollNo} and Name is {props.name} </h1>
//         </div>
//     )
// }

// for class and props-type



class Props extends Component {
    render() {
        return (
            <div>
                <h1>Your Roll No. {this.props.roll} and Name is {this.props.name} and semester {this.props.semester} </h1>
            </div>
        );
    }
}

Props.propTypes = {
       name: PropTypes.string,
       roll: PropTypes.number.isRequired  // agr roll ki value nh di hugi, or roll use huwa hy to error ajayega.
    }
    
Props.defaultProps = {
    semester: "5th"
}



export default Props;
