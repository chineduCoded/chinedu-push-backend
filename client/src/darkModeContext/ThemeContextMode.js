import { createContext, useContext, useReducer, useEffect } from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import { INITIAL_STATE, ThemeContextReducer } from "./themeContextReducer";
import { themesTypes } from "./themesTypes";

export const ThemeContext = createContext(INITIAL_STATE)

export const ThemeContextProvider = ({children}) => {
    const [theme, dispatch] = useReducer(ThemeContextReducer, INITIAL_STATE)
    const { darkMode } = theme

    useEffect(() => {
        localStorage.setItem("DarkMode", JSON.stringify(darkMode))
    }, [darkMode])

    const themeStyle = darkMode === false ? lightTheme : darkTheme

    const { TOGGLE } = themesTypes
    const toggleTheme = (toggleMode) => {
        dispatch({
            type: TOGGLE,
            payload: toggleMode
        })
    }

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