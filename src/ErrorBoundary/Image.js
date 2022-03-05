import React, { Component } from 'react';
export default class Image extends Component {
  render() {
    // but whole app crashed, because of one image not found. // so we use Error.js for error boundaries.
    if (this.props.boy === 'noImage') {
      throw new Error ('Image not Found!');
    }
    return (
      <div>
        <img src={this.props.boy} width="200px" />
      </div>
    )
  }
}
