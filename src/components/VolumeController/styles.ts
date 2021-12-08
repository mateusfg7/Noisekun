import styled from 'styled-components'

interface Props {
  percentValue: number
}

const VolumeControllerInput = styled.input<Props>`
  opacity: 0;

  appearance: none;

  width: 100%;
  height: 4px;

  background: rgba(255, 255, 255, 1);

  border-radius: 13px;

  cursor: pointer;

  /* MARKER */
  /* Chrome/Safari/Opera */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;

    background: rgba(255, 255, 255, 1);

    border: none;
    border-radius: 100%;
  }

  /* Firefox */
  &::-moz-range-thumb {
    height: 13px;
    width: 13px;

    background: rgba(255, 255, 255, 1);

    border: none;
    border-radius: 100%;
  }

  /* IE */
  &::-ms-thumb {
    height: 13px;
    width: 13px;

    background: rgba(255, 255, 255, 1);

    border: none;
    border-radius: 100%;
  }

  &.selected {
    opacity: 1;
  }

  @media (max-width: 700px) {
    height: max-content;

    background: rgba(255, 255, 255, 0.3);

    background-image: linear-gradient(#fff, #fff);
    background-size: ${props => props.percentValue + 3}%;
    background-repeat: no-repeat;

    /* MARKER */
    /* Chrome/Safari/Opera */
    &::-webkit-slider-thumb {
      opacity: 0;
      height: 15px;
    }

    /* Firefox */
    &::-moz-range-thumb {
      opacity: 0;
      height: 15px;
    }

    /* IE */
    &::-ms-thumb {
      opacity: 0;
      height: 15px;
    }
  }
`

export default VolumeControllerInput
