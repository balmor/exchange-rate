import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Theme } from './components/Theme';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <Theme>
    <App />
  </Theme>,
);
