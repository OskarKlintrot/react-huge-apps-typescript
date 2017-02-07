export default {
  path: 'assignments',

  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/Assignment')
      ])
    })
  },

  getComponents(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, {
        sidebar: require('./components/Sidebar'),
        main: require('./components/Assignments')
      })
    })
  }
}