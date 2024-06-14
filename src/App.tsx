import AppRoutes from './assets/AppRoutes';
import MainThemeProvider from './assets/Theming';

export default function App() {
    return (
        <MainThemeProvider>
            <AppRoutes />
        </MainThemeProvider>
    );
}
