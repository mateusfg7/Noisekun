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

  color: ${(props) => props.theme.colors.sound.color};

  transition: 0.1s;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.sound.hover};
  }

  &.selected {
    color: ${(props) => props.theme.colors.sound.selected};
  }

  .icons {
    font-size: 80px;
  }
`;
