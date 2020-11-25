import React, { Component }  from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fetchRooms } from './RoomsActions';
import Error from '../errors/Error'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%
`
const Button = styled.button`
  font-size: 18px;

  background-color: white;
  border: solid 1px;
  margin: 1rem 0;
  padding: 1rem;
` 

class RoomsContainer extends Component {

  componentDidMount() {
    this.props.fetchRooms()
  }

  render() {
    const { rooms, isFetching, error } = this.props

    if(isFetching){
      return <p>Loading Available Rooms ...</p>
    } else if(error)
    {
      return <Error error={error} />
    }

    return(
      <Container>
        { 
          rooms.length > 0 ?
            rooms.map(room => {
              return <Button key={room.name}>{room.name}</Button>
            }) 
          :
          <p>No Rooms Available At This Time</p>
        }
      </Container>
    )
  }
}

const mapStateToProps = ({ rooms }) => {

  return { 
    isFetching: rooms.isFetching,
    rooms: rooms.rooms,
    error: rooms.error
  }
}

const mapDispatchToProps = { fetchRooms }

RoomsContainer.propTypes = {
  isFetching: PropTypes.bool,
  rooms: PropTypes.array,
  fetchRooms: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsContainer);