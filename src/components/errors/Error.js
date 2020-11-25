import styled from 'styled-components'
 
const ErrorMessage = styled.p`
  color: red;
  font-size: 20px;
`
const Error = ({ error }) => {
  return <ErrorMessage>{error}</ErrorMessage>
}

export default Error