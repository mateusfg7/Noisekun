import styled from 'styled-components'

const LocalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 15vh;

  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.089);

  h1 {
    a {
      text-decoration: none;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.7);
    }
  }
`

export default LocalHeader
