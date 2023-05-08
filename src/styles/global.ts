import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.green};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    color: ${(props) => props.theme["base-title"]};
  }

  input {
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-input-text"]};
  }
`;
