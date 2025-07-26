import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './i18n';

import { router } from './router.tsx';
import theme from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssBaseline />
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
