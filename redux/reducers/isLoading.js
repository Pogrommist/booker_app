import { ON_REQUEST_START, ON_REQUEST_FINISH } from '../constants'

const initialState = {
  isLoading: true,
}

export default function isLoading (state = initialState, action) {
  switch (action.type) {
    case ON_REQUEST_START:
      return state.isLoading = true
    case ON_REQUEST_FINISH:
      return state.isLoading = false
    default: return state;
  }
}
