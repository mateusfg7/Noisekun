import styled from 'styled-components';

export const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 15px;

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);

  p {
    a {
      text-decoration: none;
      color: white;
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
