import AppRoutes from './assets/appRoute/AppRoutes';
import MainThemeProvider from './assets/themming/Theming';

export default function App() {
    return (
        <MainThemeProvider>
            <AppRoutes />
        </MainThemeProvider>
    );
}
