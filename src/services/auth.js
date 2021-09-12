import api from './api'

export const AuthService = {
  login(username, password) {
    return api.call().post('/jwt-auth/v1/token', {
      username,
      password
    })
  },
  register(email, username,password) {
    return api.call().post('/wp/v2/users/register', {
      email,
      username,
      password
    })
  },
  getMe() {
    return api.callWithToken().get('/wp/v2/users/me')
  }
} 
