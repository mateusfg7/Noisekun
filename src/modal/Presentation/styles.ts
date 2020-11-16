import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 70vw;
  min-height: 70vh;
  border-radius: 5px;

  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);

  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  a {
    text-decoration: none;
    color: black;
  }

  .pd {
    padding: 30px;
  }

  div.head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button.close-modal {
      font-size: 30px;
    }
  }

  main {
    p:first-child {
      margin-bottom: 20px;
    }
  }
`;

export const Empty = styled.div`
  display: none;
`;

export default Container;
