import RoomsReducer from './RoomsReducer';
import * as types from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  error: undefined,
  rooms: []
}

describe('rooms reducer', () => {
  it('should return the initial state', () => {
    expect(RoomsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_ROOMS_REQUEST', () => {
    // initial state
    const beforeState = {
      isFetching: false
    }

    // action to request fetching rooms
    const action = {
      type: types.FETCH_ROOMS_REQUEST
    }

    // expect function to update state
    const expectedState = {
      isFetching: true,
    }

    expect(RoomsReducer(beforeState, action)).toEqual(expectedState);
  })

  it('should handle FETCH_ROOMS_FAILURE', () => {
    // initial state
    const beforeState = {
      isFetching: true,
      error: undefined
    }

    // action to report failure to fetch rooms
    const action = {
      type: types.FETCH_ROOMS_FAILURE,
      error: "Failed to loadrooms"
    }

    // expect function to update state
    const expectedState = {
      isFetching: false,
      error: "Failed to loadrooms"
    }

    expect(RoomsReducer(beforeState, action)).toEqual(expectedState);
  })

  it('should handle FETCH_ROOMS_SUCCESS', () => {
    const data = [
        { id: 1, name: "Room1"},
        { id: 2, name: "Room2"}
      ]

    // initial state
    const beforeState = {
      isFetching: true,
      error: undefined,
      rooms: []
    }

    // action to report success to fetch rooms
    const action = {
      type: types.FETCH_ROOMS_SUCCESS,
      rooms: data
    }

    // expect function to update state
    const expectedState = {
      isFetching: false,
      error: undefined,
      rooms: data
    }

    expect(RoomsReducer(beforeState, action)).toEqual(expectedState);
  })
})