import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`

export const SoundComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
`

export const SoundButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  color: rgba(255, 255, 255, 0.5);
  border-radius: 10%;

  transition: background-color 0.3s, color 0.3s;

  img {
    border: 1px solid red;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
    opacity: 0.7;
  }

  cursor: pointer;

  &.selected {
    color: rgba(255, 255, 255, 1);
    img {
      opacity: 1;
    }

    border-radius: 10% 10% 0 0;
  }

  &.disabled {
    cursor: not-allowed;

    background-image: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(255, 255, 255, 0.04) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    background-size: 400% 400%;

    animation: ${shimmer} 1s ease-in-out infinite;
    img {
      opacity: 0.2;
    }
  }

  @media (min-width: 700px) {
    &.selected {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  @media (min-width: 800px) {
    &:hover {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.04);
      img {
        opacity: 1;
      }
      background: rgba(255, 255, 255, 0.1);
    }

    &.selected {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
      background: rgba(255, 255, 255, 0.1);
    }

    &.disabled {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.04);
    }
    &.disabled:hover {
      img {
        opacity: 0.2;
      }
      background: none;
      background-image: linear-gradient(
        -90deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 0.04) 50%,
        rgba(0, 0, 0, 0) 100%
      );
      background-size: 400% 400%;
      animation: ${shimmer} 1s ease-in-out infinite;
    }
  }
`
