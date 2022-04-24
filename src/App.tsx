import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import MainPage from './views/MainPage';
import theme from './style/Theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <CssBaseline />
                <MainPage />
            </Provider>
        </ThemeProvider>
    );
}

export default App;
