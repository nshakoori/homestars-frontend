import * as types from '../../constants/actionTypes'
import config from '../../config'
import axios from 'axios'

export const fetchRooms = () => {
  return dispatch => {
    fetchRoomsRequest(dispatch)
    return axios({
      baseURL: config.API,
      url: '/rooms',
      method: 'get'
    }).then((response) => {
        fetchRoomsSuccess(dispatch, response)
      }).catch( (error) => {
        fetchRoomsFailure(dispatch, error)
      })
  }
}

export const fetchRoomsRequest = (dispatch) => {
  dispatch({
    type: types.FETCH_ROOMS_REQUEST
  })
}

export const fetchRoomsSuccess = (dispatch, response) => {
  dispatch({
    type: types.FETCH_ROOMS_SUCCESS,
    rooms: response.data
})
}

export const fetchRoomsFailure = (dispatch, error) => {
  dispatch({
    type: types.FETCH_ROOMS_FAILURE,
    error: error.toString()
  })
} 
