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

  color: rgba(255, 255, 255, 0.5);
  font-size: 30px;

  transition: 1s;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  }

  ${ConfigButton}:checked ~ & {
    transform: translateX(-14vw) rotateY(-180deg);
    color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 1100px) {
    transition: none;

    ${ConfigButton}:checked ~ & {
      transform: rotateY(-180deg);
      left: 0;
      color: rgba(255, 255, 255, 1);
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
      color: #39353b;
    }

    div.fieldset-content-title {
      border-radius: 10px 10px 0 0;
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.7);
    }

    div.fieldset-content-input {
      border-radius: 0 0 10px 10px;
      backdrop-filter: blur(5px);
      background: rgba(255, 255, 255, 0.5);
    }

    input#url {
      border: none;
      background: none;
      text-align: center;
    }
  }

  button {
    border-radius: 10px;

    padding: 15px;
    margin-top: 5px;

    width: 100%;

    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.5);
    color: rgba(0, 0, 0, 0.753);
    transition: 0.1s;
  }

  button:hover {
    background-color: rgba(255, 200, 200, 0.5);
    backdrop-filter: blur(10px);
  }
  button:active {
    background-color: white;
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
        background: rgba(255, 255, 255, 0.5);
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 50px;

      background: rgba(255, 200, 200, 0.5);
      color: rgba(0, 0, 0, 0.753);
    }

    button:active {
      background-color: rgba(255, 200, 200, 0.8);
      backdrop-filter: blur(10px);
    }
  }
`;
