import { useContext } from 'react';
import { ColorModeContext } from '../context/ToggleColorModeContext';

export const useToggleColorMode = () => {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw new Error("toggle colour mode won't work here");
  }

  return context;
};
