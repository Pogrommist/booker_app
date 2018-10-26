import { api } from './index'

export function signUp (data) {
    return api.post('/auth', data)
}

export function signIn (data) {
    return api.post('/auth/sign_in', data)
}

export function validateToken(response){
    const accessToken = {
      "access-token": response.headers["access-token"],
      "client": response.headers.client,
      "uid": response.headers.uid
    }
    return api.get('/auth/validate_token', {}, ...{...accessToken })
  }
