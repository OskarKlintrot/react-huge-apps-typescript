export default {
  path: 'course/:courseId',

  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/Announcements').default,
        require('./routes/Assignments').default,
        require('./routes/Grades').default
      ])
    })
  },

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Course').default)
    })
  }
}
