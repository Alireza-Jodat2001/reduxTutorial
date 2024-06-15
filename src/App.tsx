import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './assets/appRoute/AppRoutes';
import MainThemeProvider from './assets/themming/Theming';
import { infoStore } from './assets/pages/reduxToolkitPage/infoReducer/infoStore';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <>
            <MainThemeProvider>
                <Provider store={infoStore}>
                    <RouterProvider router={AppRouter} />
                </Provider>
            </MainThemeProvider>
        </>
    );
}
