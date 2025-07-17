import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Stack, TextField } from '@mui/material';

export default function ControlPad() {
    const [range, setRange] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRange(event.target.value);
    }

    return (
        <Stack spacing={2}>
            <NumericFormat
                value={range}
                onChange={handleChange}
                customInput={TextField}
                valueIsNumericString
                variant="standard"
                label="range"
            />
        </Stack>
    );
}
