import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme";
import Home from "./components/dashboard/Home"
import SignIn from "./components/user/SignIn"
import PageNotFound from "./components/notFound/PageNotFound"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ForgotPassword from "./components/user/ForgotPassword";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
