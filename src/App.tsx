import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { StyledEngineProvider } from "@mui/styled-engine";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
