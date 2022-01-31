import { createContext, useReducer } from 'react';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOUR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: 'red' });

  const changeColour = (colour) => {
    dispatch({ type: 'CHANGE_COLOUR', payload: colour });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColour }}>{children}</ThemeContext.Provider>
  );
}
