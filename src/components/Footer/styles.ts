import styled from 'styled-components'

const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 15px;

  backdrop-filter: blur(4px);

  p {
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
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
`

export default FooterSection
