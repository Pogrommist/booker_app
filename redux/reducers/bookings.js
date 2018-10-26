import { FETCH_BOOKINGS_SUCCESS, DELETE_BOOKING_SUCCESS, CLEAR_BOOKINGS } from '../constants'

const initialState = []

export default function bookings (state = initialState, action) {
	switch(action.type) {
		case FETCH_BOOKINGS_SUCCESS:
			return [...state, ...action.payload]
		case DELETE_BOOKING_SUCCESS:
			return [...state.filter(booking => booking.id !== action.payload)]
		case CLEAR_BOOKINGS:
			return state = []
		default: return state

	}
}
