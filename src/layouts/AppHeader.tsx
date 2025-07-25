import { useTranslation } from 'react-i18next';
import GitHubIcon  from '@mui/icons-material/GitHub';
import { Container, IconButton, Stack, styled, Tooltip } from '@mui/material';

import Logo from '../components/action/Logo.tsx';

const Header = styled('header')(({ theme }) => [
    {
        position: 'sticky',
        top: 0,
        transition: theme.transitions.create('top'),
        zIndex: theme.zIndex.appBar,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
    } as const
]);

const HEIGHT = 60;

interface AppHeaderProps {
    gitHubRepository?: string;
}

function AppHeader(props: AppHeaderProps) {
    const { gitHubRepository = 'https://github.com/SailorMoonQ/Cornucopia' } = props;
    const { t } = useTranslation();

    return (
        <Header>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: HEIGHT }}>
                <Logo />
                <Stack direction="column" spacing={2}>
                    <Tooltip title={t('frame.github')} enterDelay={300}>
                        <IconButton
                            component="a"
                            color="primary"
                            size="small"
                            sx={{
                                border: `1px solid rgb(217, 222, 226)`,
                                borderRadius: '12px',
                            }}
                            href={gitHubRepository}
                            target="_blank"
                            rel="noopener"
                            data-ga-event-category="header"
                            data-ga-event-action="github"
                        >
                            <GitHubIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Container>
        </Header>
    );
}

export default AppHeader;
