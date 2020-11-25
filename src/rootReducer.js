import { combineReducers } from "redux";
import RoomReducer from './components/Room/RoomsReducer'

export default combineReducers({
  rooms: RoomReducer
})