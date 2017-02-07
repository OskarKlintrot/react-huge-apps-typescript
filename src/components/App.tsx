/*globals COURSES:true */
import React, { Component } from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class App extends Component<any, any> {
  render() {
    return (
      <div>
        <GlobalNav />
        <div style={{ padding: 20 }}>
          {this.props.children || <Dashboard courses={COURSES} />}
        </div>
      </div>
    )
  }
}

export default App
