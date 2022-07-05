import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import CssBaseline, { CssBaselineProps } from '@mui/material/CssBaseline';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <CssBaseline>
        <App />
      </CssBaseline>
    </RecoilRoot>
  </React.StrictMode>
);
