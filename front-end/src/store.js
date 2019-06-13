export default {
  debug: true,
  state: {
    is_new: false,
    // eslint-disable-next-line
    is_authenticated: window.localStorage.getItem('madblog-token') ? true : false,
    is_login: window.localStorage.getItem('token') ? true : false,
  },
  setNewAction () {
    if (this.debug) {
      console.log('setNewAction triggered')
      console.log(window.localStorage.getItem('madblog-token'))
    }
    this.state.is_new = true
  },
  resetNotNewAction () {
    if (this.debug) { console.log('resetNotNewAction triggered') }
    this.state.is_new = false
  },
  loginAction () {
    if (this.debug) {
      console.log(window.localStorage.getItem('token'))
      console.log('loginAction triggered')
    }
    this.state.is_authenticated = true
    this.state.is_login = true
  },
  logoutAction () {
    if (this.debug) console.log('logoutAction triggered')
    window.localStorage.removeItem('token')
    this.state.is_authenticated = false
    this.state.is_login = false
  }
}
