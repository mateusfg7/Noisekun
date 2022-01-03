import styled from 'styled-components'

export const SoundGridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;

  margin: 25px auto;

  @media (min-width: 350px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
  }
`
