import styled from 'styled-components';

export const ConfigButton = styled.input`
  display: none;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const ConfigLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 2vh;
  right: 2vw;

  width: 80px;
  height: 80px;

  color: ${(props) => props.theme.colors.config.arrowButton.color};
  font-size: 30px;

  transition: 1s;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.config.arrowButton.hover};
  }

  ${ConfigButton}:checked ~ & {
    transform: translateX(-14vw) rotateY(-180deg);
    color: ${(props) => props.theme.colors.config.arrowButton.checked};
  }

  @media (max-width: 1100px) {
    transition: none;

    ${ConfigButton}:checked ~ & {
      transform: rotateY(-180deg);
      left: 0;
      color: ${(props) => props.theme.colors.config.arrowButton.checked};
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

export const ConfigurationsList = styled.div`
  position: fixed;
  top: 0;
  right: -300px;

  height: 100%;
  min-width: 14vw;

  padding: 15px;

  transition: 1s;

  div.fieldset {
    div.fieldset-content {
      padding: 15px;
      text-align: center;
      color: ${(props) => props.theme.colors.config.fieldset.color};
    }

    div.fieldset-content-title {
      border-radius: 10px 10px 0 0;
      backdrop-filter: blur(10px);
      background: ${(props) =>
        props.theme.colors.config.fieldset.titleBackground};
    }

    div.fieldset-content-input {
      border-radius: 0 0 10px 10px;
      backdrop-filter: blur(5px);
      background: ${(props) =>
        props.theme.colors.config.fieldset.inputBackground};
    }

    input#url {
      border: none;
      background: none;
      text-align: center;
      color: ${(props) => props.theme.colors.config.fieldset.color};
    }
  }

  div.fieldset + div.fieldset {
    margin-top: 5px;
  }

  button {
    border-radius: 10px;

    padding: 15px;
    margin-top: 5px;

    width: 100%;

    backdrop-filter: blur(5px);
    background: ${(props) => props.theme.colors.config.resetButton.background};
    color: ${(props) => props.theme.colors.config.resetButton.color};
    transition: 0.1s;
  }

  button:hover {
    background: ${(props) => props.theme.colors.config.resetButton.hover};
    backdrop-filter: blur(10px);
  }
  button:active {
    background-color: ${(props) =>
      props.theme.colors.config.resetButton.active.desktop};
  }

  ${ConfigButton}:checked ~ & {
    transform: translateX(-300px);
  }

  @media (max-width: 1100px) {
    div.fieldset {
      div.fieldset-content-title {
        backdrop-filter: blur(10px);
      }
      div.fieldset-content-input {
        backdrop-filter: blur(5px);
      }
    }
  }

  @media (max-width: 750px) {
    position: relative;
    right: 0;

    max-width: 250px;

    margin: auto;

    div.fieldset {
      div.fieldset-content {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      div.fieldset-content-input {
        min-height: 30px;

        border-radius: 0 0 10px 10px;

        backdrop-filter: blur(5px);
        background: ${(props) =>
          props.theme.colors.config.fieldset.inputBackground};
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 50px;

      background: ${(props) => props.theme.colors.config.resetButton.hover};
      color: ${(props) => props.theme.colors.config.resetButton.color};
    }

    button:active {
      background-color: ${(props) =>
        props.theme.colors.config.resetButton.active.mobile};
      backdrop-filter: blur(10px);
    }
  }
`;
