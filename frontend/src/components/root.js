// src/components/root.js

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import App from './app';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6BBAA7',
        }
    }
});

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </HashRouter>
    </Provider>
);

export default Root;