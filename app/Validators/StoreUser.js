'use strict'

class StoreUser {
  get rules () {
    return {
      
      email: 'required|email|unique:users,email',
      password: 'required|min:6|confirmed'
     
    }
  }
  get messages () {
    return {
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.min': 'Minimum character for password is 3'
    }
  }
}

module.exports = StoreUser
