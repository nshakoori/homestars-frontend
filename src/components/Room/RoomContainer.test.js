//import configureStore from 'redux-mock-store';
import RoomsContainer from './RoomsContainer'
import toJson from 'enzyme-to-json';
import mockStore from '../../utils/mockStore'

describe('RoomsContainer', () => {

  it('should render loading message', () => {
    const initialState = {
      isFetching: true,
      error: undefined,
      rooms: []
    }
    const store = mockStore(initialState)
    const wrapper = shallow(
      <RoomsContainer store={store}/>
    ).dive()
  
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('should render loading message', () => {
    const initialState = {
      isFetching: false,
      error: "error message",
      rooms: []
    }
    const store = mockStore(initialState)
    const wrapper = shallow(
      <RoomsContainer store={store}/>
    ).dive()
  
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('should render loading message', () => {
    const initialState = {
      isFetching: false,
      error: undefined,
      rooms: [ { id: 1, name: 'Room1'}, { id: 2, name: 'Room2'} ]
    }
    const store = mockStore(initialState)
    const wrapper = shallow(
      <RoomsContainer store={store}/>
    ).dive()
  
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})