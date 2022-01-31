import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToggleColorModeProvider } from './context/ToggleColorModeContext';

ReactDOM.render(
  <React.StrictMode>
    <ToggleColorModeProvider>
      <App />
    </ToggleColorModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
