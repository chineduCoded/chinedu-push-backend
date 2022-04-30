import { createContext, useContext, useReducer, useEffect } from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import { initialState, initializer, ThemeContextReducer } from "./themeContextReducer";
import { themesTypes } from "./themesTypes";

export const ThemeContext = createContext(initialState)

export const ThemeContextProvider = ({children}) => {
    const [theme, dispatch] = useReducer(ThemeContextReducer, initialState, initializer)
    const { darkMode } = theme
    const { TOGGLE } = themesTypes
 

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(theme))
    }, [theme])


    const toggleTheme = (toggleMode) => {
       dispatch({
            type: TOGGLE,
            payload: toggleMode
        })
    }

    const themeStyle = darkMode === false ? lightTheme : darkTheme

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme, themeStyle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useDarkMode =() => {
    const { darkMode, toggleTheme, themeStyle } = useContext(ThemeContext)

    return { darkMode, toggleTheme, themeStyle }
}