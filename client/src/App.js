import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components"

import HomeScreen from "./screens/home";
import HomeScreenRoutes from "./HomeScreenRoutes"
import { useDarkMode } from "./darkModeContext/ThemeContextMode";






function App() {

  const { themeStyle } = useDarkMode()
 
 
  return (
    <>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyles />
        <HomeScreen>
          <HomeScreenRoutes />
        </HomeScreen>
      </ThemeProvider>
    </>
  );
}

export default App;
