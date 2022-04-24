import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
import './App.css';
import MainPage from './views/MainPage';
import theme from './style/Theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
