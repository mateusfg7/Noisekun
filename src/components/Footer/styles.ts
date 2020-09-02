import styled from 'styled-components';

export const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 15px;

  background: ${(props) => props.theme.colors.footer.background};
  backdrop-filter: blur(4px);

  p {
    a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.footer.text};
    }
  }

  p {
    a.author {
      font-weight: bold;
    }
  }

  p {
    a.copy:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
