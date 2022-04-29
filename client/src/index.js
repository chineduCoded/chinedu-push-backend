import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './features/store';
import { ThemeContextProvider } from './darkModeContext/ThemeContextMode';



const container = document.getElementById('app')
const root = createRoot(container)

root.render(
    <ThemeContextProvider>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ThemeContextProvider>
)