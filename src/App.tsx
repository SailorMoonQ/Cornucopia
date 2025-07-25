import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';
import { Box, Container, Typography } from '@mui/material';

import AppHeader from './layouts/AppHeader.tsx';

export default function App() {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <AppHeader />
            <Container>
                <Box sx={{ my: 4 }}>
                    <Suspense fallback={
                        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                            {t('loading')}
                        </Typography>
                    }>
                        <Outlet />
                    </Suspense>
                </Box>
            </Container>
        </React.Fragment>
    );
}
