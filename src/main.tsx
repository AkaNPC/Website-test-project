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
      main: '#57b4e1',
      contrastText: '#ffffff',
      dark: '#2d3449',
      light: '#639dcc',
    },
    secondary: {
      main: '#3f86ba',
      contrastText: '#ffffff',
      dark: '#2d3449',
    },
    text: {
      primary: '#2d3449',
      secondary: '#2d3449',
      disabled: '#d1d2d5',
    },
    background: {
      default: '#ffffff',
      paper: '#639dcc'
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
