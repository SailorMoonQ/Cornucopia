import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2'
        },
        secondary: {
            main: '#dc004e'
        },
        background: {
            default: '#fff',
            paper: '#fff'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(','),
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500
        },
        h4: {
            fontSize: '1.75rem',
            fontWeight: 400
        }
    }
});

export default theme;
