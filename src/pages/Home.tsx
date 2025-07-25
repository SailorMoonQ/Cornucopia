import { Box, Link } from '@mui/material';

function Home() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Link href="/lottery">Lottery</Link>
            <br />
            <Link href="/src/pages/Blog">Blog</Link>
        </Box>
    );
}

export default Home;
