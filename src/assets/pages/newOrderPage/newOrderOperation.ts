import { ActionFunctionArgs } from 'react-router-dom';

interface cartListType {
    name: string;
    price?: number;
}
interface newDataType {
    cart: cartListType;
}

export const cart: cartListType[] = [
    { name: 'phone', price: 12_000 },
    { name: 'laptop', price: 1_200_000 },
];

export async function action({ request }: ActionFunctionArgs): Promise<null> {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    if (typeof data.cart !== 'string') return null;

    const newData: newDataType = {
        ...data,
        cart: JSON.parse(data.cart),
    };

    console.log(newData);

    return null;
}
