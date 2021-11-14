import styled from 'styled-components';

const LocalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 15vh;

  backdrop-filter: blur(10px);
  background: ${(props) => props.theme.colors.header.background};
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.089);

  h1 {
    a {
      text-decoration: none;
      font-weight: 700;
      color: ${(props) => props.theme.colors.header.text};
    }
  }
`;

export default LocalHeader;
