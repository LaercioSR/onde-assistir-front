import styled from "styled-components";

export const NotFoundContainer = styled("main")`
  position: absolute;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 80vh;
  }

  h1 {
    font-size: 10rem;
    color: ${(props) => props.theme["base-input-text"]};
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    img {
      width: 80vw;
    }

    h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 450px) {
    margin-top: 20rem;
    position: relative;

    img {
      margin-top: 5rem;
      width: 80vw;
      position: absolute;
    }

    h1 {
      font-size: 3rem;
      position: absolute;
    }
  }
`;
