import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BackToHomeBtn() {
    const BackBtnNavigation = useNavigate();

    return (
        <Button
            variant="contained"
            color="error"
            onClick={() => BackBtnNavigation('/Home')}
        >
            Back to home
        </Button>
    );
}
