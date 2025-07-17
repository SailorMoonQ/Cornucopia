import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import App from './App.tsx';

const Lottery = lazy(() => import('./components/lottery/Lottery.tsx'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'lottery',
                element: <Lottery />
            }
        ]
    }
]);
