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

  color: rgba(255, 255, 255, 0.5);

  transition: 0.1s;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
  }

  &.selected {
    color: rgba(255, 255, 255, 1);
  }

  .icons {
    font-size: 80px;
  }
`;
