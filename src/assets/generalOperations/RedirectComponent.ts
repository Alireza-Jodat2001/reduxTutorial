import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function RedirectComponent() {
    const { pathname } = useLocation();
    const RedirectNavigation = useNavigate();

    useEffect(() => {
        if (pathname === '/') RedirectNavigation('/Home');
    }, [pathname]);

    return null;
}
