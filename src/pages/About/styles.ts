import styled from "styled-components";

export const AboutContainer = styled("main")`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.white};
    padding: 3rem;
    width: 50vw;
    height: 70vh;
    border-radius: 10px;

    p {
      font-size: 500;
    }

    a {
      color: ${(props) => props.theme["green-light"]};

      &:hover {
        color: ${(props) => props.theme["green-dark"]};
      }
    }

    @media (max-width: 1800px) {
      width: 70vw;
      height: 80vh;

      p {
        font-size: 400;
      }
    }

    @media (max-width: 1400px) {
      width: 80vw;
      height: 90vh;
    }

    @media (max-width: 1000px) {
      width: 95%;
      height: 120vh;
    }
  }
`;
