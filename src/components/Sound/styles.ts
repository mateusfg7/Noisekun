import styled from 'styled-components';

export const SoundComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
`;

export const SoundButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  opacity: 0.5;

  transition: 0.1s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &.selected {
    opacity: 1;
  }
`;
