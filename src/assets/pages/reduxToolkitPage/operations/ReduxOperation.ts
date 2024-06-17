import { LoaderFunctionArgs } from 'react-router-dom';

export async function loader() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
}

export function loaderInfoId({ params }: LoaderFunctionArgs): boolean {
    console.log(params);

    return true;
}
