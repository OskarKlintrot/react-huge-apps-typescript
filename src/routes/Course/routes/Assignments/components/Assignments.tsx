import React, { Component } from 'react'

class Assignments extends Component<any, any> {
  render() {
    return (
      <div>
        <h3>Assignments</h3>
        {this.props.children || <p>Choose an assignment from the sidebar.</p>}
      </div>
    )
  }
}

export default Assignments
