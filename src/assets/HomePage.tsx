import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const ReducerBtnNavigation = useNavigate();

    return (
        <Stack direction="row">
            <Button
                variant="contained"
                onClick={() => ReducerBtnNavigation('/Redux-Tutorial')}
            >
                Redux Tutorial
            </Button>
        </Stack>
    );
}
