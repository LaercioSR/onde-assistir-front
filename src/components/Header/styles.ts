import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: ${(props) => props.theme["green-dark"]};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  
  img {
    width: 10rem;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;

    img {
      width: 6rem;
    }
  }
`;
