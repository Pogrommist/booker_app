import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'
import bookings from './bookings'
import isLoading from './isLoading'

export const rootReducer = combineReducers({
	form: formReducer,
	auth,
	bookings,
	isLoading
})
