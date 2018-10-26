import { ON_SUCCESS_LOGIN, UPDATE_ACCESS_TOKEN } from '../constants'

const initialState = {
  token: {},
  user: {}
}

export default function auth (state = initialState, action) {
  switch (action.type) {
	case ON_SUCCESS_LOGIN:
		const headers = action.payload['accessToken']
	  	const token = {
			'access-token': headers['access-token'],
			client: headers.client,
      uid: headers.uid,
      expiry: headers.expiry,
      'token-type': headers['token-type'],
      'Content-Type':  'application/json',
      'Accept':  'application/json'
	   }
	  return {...state, user: {...action.payload.user.data}, token }

    case UPDATE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        token: Object.assign({}, state.token, {
          "access-token": action.payload.new_token,
          }),
        });
		default: return state;
  }
}
