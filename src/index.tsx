/// <reference path="../node_modules/@types/node/index.d.ts" />

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, hashHistory } from 'react-router'

import App from './components/App'
import Calendar from './routes/Calendar'
import Course from './routes/Course'
import Grades from './routes/Grades'
import Messages from './routes/Messages'
import Profile from './routes/Profile'
import './stubs/COURSES'

const history = process.env.NODE_ENV === 'development' ? hashHistory : browserHistory

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: App,
    childRoutes: [
      Calendar,
      Course,
      Grades,
      Messages,
      Profile
    ]
  } ]
}

render((
  <Router
    history = {history}
    routes = {rootRoute}
  />
), document.getElementById('example'))
