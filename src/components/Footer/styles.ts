import styled from 'styled-components'

const FooterSection = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 15px;

  backdrop-filter: blur(4px);

  p {
    font-size: 1.25rem;
    padding: 5px;

    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 1);

      &.author {
        font-weight: bold;
      }
      &.copy:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 769px) {
    p {
      font-size: 1rem;
      padding: 2px;
    }
  }
`

export default FooterSection
