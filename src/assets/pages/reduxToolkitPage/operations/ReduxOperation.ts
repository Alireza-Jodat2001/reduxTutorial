import { LoaderFunction } from 'react-router-dom';

export async function loader() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
}

interface infoIdType {
    params: {
        infoId?: string;
    };
}

export function loaderInfoId({
    params,
}: infoIdType): boolean | LoaderFunction<any> | undefined {
    console.log(params);
    return true;
}
