import React, { Component } from 'react'

class Calendar extends Component<any, any> {
  render() {
    const events = [
      { id: 0, title: 'essay due' }
    ]

    return (
      <div>
        <h2>Calendar</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Calendar
