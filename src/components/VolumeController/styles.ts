import styled from 'styled-components'

interface Props {
  percentValue: number
}

const VolumeControllerInput = styled.input<Props>`
  opacity: 0;

  appearance: none;

  width: 100%;
  height: max-content;

  background: rgba(255, 255, 255, 0.3);

  background-image: linear-gradient(#fff, #fff);
  background-size: ${props => props.percentValue + 3}%;
  background-repeat: no-repeat;

  border-radius: 13px;

  cursor: pointer;

  --thumb-opacity: 0;
  --thumb-height: 15px;
  --thumb-width: 15px;
  --thumb-color: rgba(255, 255, 255, 1);
  --thumb-border: none;
  --thumb-border-radius: 100%;
  --transition: all 0.1s;

  /* MARKER */
  /* Chrome/Safari/Opera */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    opacity: var(--thumb-opacity);

    height: var(--thumb-height);
    width: var(--thumb-width);

    background: var(--thumb-color);

    border: var(--thumb-border);
    border-radius: var(--thumb-border-radius);

    transition: var(--transition);
  }
  /* Firefox */
  &::-moz-range-thumb {
    opacity: var(--thumb-opacity);

    height: var(--thumb-height);
    width: var(--thumb-width);

    background: var(--thumb-color);

    border: var(--thumb-border);
    border-radius: var(--thumb-border-radius);

    transition: var(--transition);
  }
  /* IE */
  &::-ms-thumb {
    opacity: var(--thumb-opacity);

    height: var(--thumb-height);
    width: var(--thumb-width);

    background: var(--thumb-color);

    border: var(--thumb-border);
    border-radius: var(--thumb-border-radius);

    transition: var(--transition);
  }

  &.selected {
    opacity: 1;
  }

  @media (min-width: 700px) {
    height: 3px;

    background: rgba(255, 255, 255, 1);

    background-image: none;

    --thumb-opacity: 1;
    --thumb-height: 15px;
    --thumb-width: 15px;

    /* MARKER */
    /* Chrome/Safari/Opera */
    &::-webkit-slider-thumb {
      opacity: var(--thumb-opacity);
      height: var(--thumb-height);
      width: var(--thumb-width);
    }
    /* Firefox */
    &::-moz-range-thumb {
      opacity: var(--thumb-opacity);
      height: var(--thumb-height);
      width: var(--thumb-width);
    }
    /* IE */
    &::-ms-thumb {
      opacity: var(--thumb-opacity);

      height: var(--thumb-height);
      width: var(--thumb-width);
    }
  }
  @media (min-width: 800px) {
    --thumb-height: 10px;
    --thumb-width: 10px;

    /* MARKER */
    /* Chrome/Safari/Opera */
    &::-webkit-slider-thumb {
      height: var(--thumb-height);
      width: var(--thumb-width);
    }
    /* Firefox */
    &::-moz-range-thumb {
      height: var(--thumb-height);
      width: var(--thumb-width);
    }
    /* IE */
    &::-ms-thumb {
      height: var(--thumb-height);
      width: var(--thumb-width);
    }

    &:hover {
      --thumb-hover-height: 15px;
      --thumb-hover-width: 15px;

      /* MARKER */
      /* Chrome/Safari/Opera */
      &::-webkit-slider-thumb {
        height: var(--thumb-hover-height);
        width: var(--thumb-hover-width);
      }
      /* Firefox */
      &::-moz-range-thumb {
        height: var(--thumb-hover-height);
        width: var(--thumb-hover-width);
      }
      /* IE */
      &::-ms-thumb {
        height: var(--thumb-hover-height);
        width: var(--thumb-hover-width);
      }
    }
  }
`

export default VolumeControllerInput
