import { FormHelperText, Input, InputLabel } from '@mui/material';
import { Form, useNavigation } from 'react-router-dom';
import { cart } from './newOrderOperation';
import CircularIndeterminate from '../../sharedComponents/progress';

export default function NewOrderPage() {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <>
            <Form method="POST">
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input
                    name="email"
                    id="my-input"
                    aria-describedby="my-helper-text"
                />
                <input type="hidden" name="cart" value={JSON.stringify(cart)} />
                <FormHelperText id="my-helper-text">
                    We'll never share your email.
                </FormHelperText>
            </Form>

            {isSubmitting && <CircularIndeterminate />}
        </>
    );
}
