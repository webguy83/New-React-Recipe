import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Cannot provide this');
  }

  return context;
};
