export default {
  path: 'messages',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./components/Messages').default)
    })
  }
}
