import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StartupsContextProvider } from './context/StartupContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StartupsContextProvider>
      <App />
    </StartupsContextProvider>
  </React.StrictMode>
);