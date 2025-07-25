import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import App from './App.tsx';

const Home = lazy(() => import('./pages/Home.tsx'));
const Lottery = lazy(() => import('./pages/Lottery.tsx'));
const Blog = lazy(() => import('./pages/./Blog'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'lottery',
                element: <Lottery />
            },
            {
                path: 'markdown',
                element: <Blog />
            },
            {
                path: '*',
                element: (<div>404 reserve</div>)
            }
        ]
    }
]);
