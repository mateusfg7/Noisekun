import styled from 'styled-components'

const VolumeControllerInput = styled.input`
  opacity: 0;

  appearance: none;

  width: 100%;
  height: 2px;

  background: rgba(255,255,255,1);

  cursor: pointer;

  /* MARKER */
  /* Chrome/Safari/Opera */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 13px;
    width: 13px;

    background: rgba(255,255,255,1);

    border: none;
    border-radius: 100%;
  }

  /* Firefox */
  &::-moz-range-thumb {
    height: 13px;
    width: 13px;

    background: rgba(255,255,255,1);

    border: none;
    border-radius: 100%;
  }

  /* IE */
  &::-ms-thumb {
    height: 13px;
    width: 13px;

    background: rgba(255,255,255,1);

    border: none;
    border-radius: 100%;
  }

  &.selected {
    opacity: 1;
  }
`

export default VolumeControllerInput
