import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { CssBaseline } from '@mui/material';

import './i18n';

import { router } from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CssBaseline />
        <RouterProvider router={router} />
    </StrictMode>
);
