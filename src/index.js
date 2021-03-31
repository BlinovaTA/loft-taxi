import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { AuthorizatonProvider } from './context/AuthorizationContext';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AuthorizatonProvider>
      <App />
    </AuthorizatonProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);