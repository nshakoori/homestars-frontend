import * as types from '../../constants/actionTypes'

const INITIAL_STATE = {
  isFetching: false,
  error: undefined,
  rooms: []
}
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ROOMS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case types.FETCH_ROOMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case types.FETCH_ROOMS_SUCCESS:
      let rooms = []

      action.rooms.forEach((currentValue) => {
        rooms.push(currentValue)
      })
      return {
        ...state,
        error: undefined,
        isFetching: false,
        rooms: rooms
      }
    default:
      return state
  }
}