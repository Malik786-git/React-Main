import React, { Component } from 'react'

export default class AddBootstrap extends Component {
  render() {
    return (
      <React.Fragment>
      {/* for link external bootstrap. */}
          {/* <button className='btn btn-warning'>Submit</button> */}
                    {/* for internal bootstrap file first import bootstrap file index.js then use in tags. */}
          <button className='btn btn-warning'>Submit</button>

      </React.Fragment>
    )
  }
}
