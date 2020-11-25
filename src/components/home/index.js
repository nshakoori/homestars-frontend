import styled from 'styled-components'
import RoomsContainer from '../Room/RoomsContainer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
`
const HomeIndex = () => {
  return (
    <Container>
      <h1>Available Rooms</h1>
      <RoomsContainer />
    </Container>
  )
}

export default HomeIndex