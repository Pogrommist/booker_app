import { signUp, signIn } from '../../services/api/auth'
import { ON_SUCCESS_LOGIN } from '../constants'
import NavigationService from '../../services/NavigationService'

export function signUpAction (data) {
	return dispatch => {
		return signUp(data)
			.then(() => {
				NavigationService.navigate('Home')
			})
			.catch(error => console.log('error', error))
	}

}

export function signInAction (data) {
	return dispatch => {
		signIn(data)
			.then(res => {
					const accessToken = res.headers
					dispatch({type: ON_SUCCESS_LOGIN, payload: { user: res.data, accessToken }})
			})
			.then(() => NavigationService.navigate('BookingsScreen'))

			.catch(error => {
					console.log("ERROR DURING TOKEN VALIDATION", error);
			})
	}

}
