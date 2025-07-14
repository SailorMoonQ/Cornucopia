import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';
import { Box, Container, Link, Typography } from '@mui/material';

import ProTip from './ProTip';

function Copyright() {
    return (
        <Typography
            variant="body2"
            align="center"
            sx={{
                color: 'text.secondary'
            }}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {
    const { t } = useTranslation();

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    {t('loading')}
                </Typography>
                <Link href="/lottery">Lottery</Link>
                <Outlet />
                <ProTip />
                <Copyright />
            </Box>
        </Container>
    );
}
