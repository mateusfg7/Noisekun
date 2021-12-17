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

  --thumb-height: 15px;
  --thumb-width: 15px;
  --thumb-color: rgba(255, 255, 255, 1);
  --thumb-border: none;
  --thumb-border-radius: 100%;

  /* MARKER */
  /* Chrome/Safari/Opera */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: var(--thumb-height);
    width: var(--thumb-width);

    background: var(--thumb-color);

    border: var(--thumb-border);
    border-radius: var(--thumb-border-radius);
  }
  /* Firefox */
  &::-moz-range-thumb {
    height: var(--thumb-height);
    width: var(--thumb-width);

    background: var(--thumb-color);

    border: var(--thumb-border);
    border-radius: var(--thumb-border-radius);
  }
  /* IE */
  &::-ms-thumb {
    height: var(--thumb-height);
    width: var(--thumb-width);

    background: var(--thumb-color);

    border: var(--thumb-border);
    border-radius: var(--thumb-border-radius);
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
