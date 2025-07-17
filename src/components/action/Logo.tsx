import { Box, Link } from '@mui/material';

import SvgSleepingCat from '../icons/SvgSleepingCat.tsx';

function Logo() {
    return (
        <Box
            component={Link}
            href="/"
            aria-label="Go to homepage"
            sx={{
                mr: 1,
                ml: 1.5,
                '& > svg': { m: '0 !important' } // override the 2px margin-left coming from the Link component
            }}
        >
            <SvgSleepingCat height={28} width={28} />
        </Box>
    );
}

export default Logo;
