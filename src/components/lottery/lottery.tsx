import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Lottery() {
    const [lotteryNumber, setLotteryNumber] = useState<number | null>(null);
    const { t } = useTranslation();

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random() * 49) + 1;
        setLotteryNumber(randomNumber);
    };

    return (
        <Box sx={{ textAlign: 'center', my: 4 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                {t('lottery.title')}
            </Typography>
            <Button variant="contained" onClick={generateNumber} sx={{ mb: 2 }}>
                {t('lottery.generate')}
            </Button>
            {lotteryNumber && (
                <Typography variant="h4">
                    {t('lottery.number')}: {lotteryNumber}
                </Typography>
            )}
        </Box>
    );
}
