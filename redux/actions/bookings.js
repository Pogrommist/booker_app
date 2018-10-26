import { fetchBookings, deleteBooking } from '../../services/api/bookings'
import {
	FETCH_BOOKINGS_SUCCESS,
	DELETE_BOOKING_SUCCESS,
	ON_REQUEST_START,
	ON_REQUEST_FINISH,
	CLEAR_BOOKINGS }
from '../constants'

export function fetchBookingsAction () {
	return (dispatch, getState) => {
		headers = getState().auth.token
		dispatch({ type: ON_REQUEST_START })
		fetchBookings(headers)
			.then(res => {
				return dispatch({ type: FETCH_BOOKINGS_SUCCESS, payload: res.data})
			})
			.then(() => dispatch({ type: ON_REQUEST_FINISH }))
    }
}

export function destroyBooking (id) {
	return dispatch => {
		deleteBooking(id)
			.then(() => dispatch({ type: DELETE_BOOKING_SUCCESS, payload: id}))
	}
}

export function clearBookings () {
	return dispatch => {
		return dispatch({ type: CLEAR_BOOKINGS})
	}
}
