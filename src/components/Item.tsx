import { Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    width: '100%',
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    color: (theme.vars ?? theme).palette.text.secondary
}));

export default Item;
