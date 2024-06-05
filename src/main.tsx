import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { DataProvider } from './context/DataProvider.tsx'


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#507fe3',
      dark: '#2f4d87',
      light: '#639dcc',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#4b44f4',
      dark: 'rgb(52, 47, 170)',
      light: 'rgb(111, 105, 246)',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#37405c',
      secondary: '#639dcc',
      disabled: '#d1d2d5',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
  },
  mixins: {
    toolbar: {
      background: 'transparent',
      boxShadow: 'none'
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DataProvider>
        <App />
      </DataProvider>
    </ThemeProvider>
  </React.StrictMode>
)
