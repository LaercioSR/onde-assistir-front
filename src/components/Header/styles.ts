import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme["base-title"]};
  height: 3.5rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  img {
    height: 2rem;
    margin: 0 1.5rem 0 0;
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;

    img {
      height: 2.5rem;
    }
  }
`;

export const SelectContainer = styled.select`
  width: 10rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-input-text"]};
  border-radius: 10px;
  border: none;
  padding: 0 0.7rem;
`;
