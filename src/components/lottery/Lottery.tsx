import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ControlPad from './ControlPad.tsx';
import generate from './lotteryGenerator.ts';

export default function Lottery() {
    const { t } = useTranslation();
    const [lotteryNumber, setLotteryNumber] = useState<number[]>([]);

    const generateNumber = () => {
        setLotteryNumber(generate());
    };

    return (
        <Grid container direction="row" spacing={2}>
            <Grid size={4}>
                <ControlPad />
            </Grid>
            <Grid size={8}>
                <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                    {t('lottery.title')}
                </Typography>
                <Button variant="contained" onClick={generateNumber} sx={{ mb: 2 }}>
                    {t('lottery.generate')}
                </Button>
                {lotteryNumber && (
                    <Typography variant="h4">
                        {t('lottery.combination')}: {lotteryNumber.join(' ')}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
}
