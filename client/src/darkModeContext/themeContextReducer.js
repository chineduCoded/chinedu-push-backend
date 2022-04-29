import { themesTypes } from "./themesTypes"

export const INITIAL_STATE = {
    darkMode: false
}

export const ThemeContextReducer = (state, action) => {
    const { LIGHT, DARK, TOGGLE } = themesTypes

    switch(action.type) {
        case LIGHT:
            return {
                darkMode: false
            }
        case DARK:
            return {
                darkMode: true
            }
        case TOGGLE: 
           return {
                darkMode: !state.darkMode
           }
        default:
            return state
    }
}