import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from './RoomsActions';
import * as types from '../../constants/actionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('rooms actions', () => {
  const store = mockStore({})
  beforeEach(() => {
    moxios.install()
    store.clearActions()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('dispatches expected actions for successful fetch', () => {
    const response = [
        { id: 1, name: "Room1"},
        { id: 2, name: "Room2"}
      ]
    
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: response
      })
    })

    const expectedActions = [
      { type: types.FETCH_ROOMS_REQUEST },
      { type: types.FETCH_ROOMS_SUCCESS, rooms: response }
    ]
    
    return store.dispatch(actions.fetchRooms()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })


  it('dispatches expected actions for successful fetch', () => {
    const response = "Error: Request failed with status code 404"
    
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        response: response
      })
    })

    const expectedActions = [
      { type: types.FETCH_ROOMS_REQUEST },
      { type: types.FETCH_ROOMS_FAILURE, error: response }
    ]
    
    return store.dispatch(actions.fetchRooms()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  })

})

