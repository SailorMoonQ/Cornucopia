import { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Stack, TextField, Typography } from '@mui/material';

import Item from '../Item.tsx';

export default function ControlPad() {
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        handler: (value: ((prevState: number) => number) | number) => void
    ) => {
        handler(+event.target.value);
    };

    return (
        <Stack spacing={2}>
            <Item elevation={0}>
                <Typography sx={{ flex: '1 1 auto' }}>Area</Typography>
                <NumericFormat
                    value={min}
                    onChange={(event) => handleChange(event, setMin)}
                    customInput={TextField}
                    valueIsNumericString
                    variant="standard"
                    label="min"
                    slotProps={{
                        inputLabel: (ownerState) => ({
                            shrink: false,
                            style: {
                                display: ownerState.value !== '' ? 'none' : 'block'
                            }
                        })
                    }}
                    sx={{ width: '60px' }}
                />
                <Typography sx={{ margin: '4px' }}>-</Typography>
                <NumericFormat
                    value={max}
                    onChange={(event) => handleChange(event, setMax)}
                    customInput={TextField}
                    valueIsNumericString
                    variant="standard"
                    label="max"
                    slotProps={{
                        inputLabel: (ownerState) => ({
                            shrink: false,
                            style: {
                                display: ownerState.value !== '' ? 'none' : 'block'
                            }
                        })
                    }}
                    sx={{ width: '60px' }}
                />
            </Item>
        </Stack>
    );
}
