import React, { createContext, useReducer } from 'react';

const ThemeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {

    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode }
            break;

        default:
            break;
    }
};

const ThemeProvider = (props) => {
const [state, dispatch] = useReducer(themeReducer, initialState);
return (
    <ThemeContext.Provider value ={{state, dispatch}}>
        {props.children}
    </ThemeContext.Provider>
)
};

export { ThemeContext, ThemeProvider }