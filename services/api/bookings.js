import { api, setHeaders } from './index'

export function fetchBookings (headers) {
    setHeaders(headers)
    return api.get('/bookings')
}

export function deleteBooking (id) {
    return api.delete(`/bookings/${id}`)
}
