import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';

const App = lazy(() => import('./App'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        )
    }
]);
