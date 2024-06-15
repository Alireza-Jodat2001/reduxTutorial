import { createBrowserRouter, redirect } from 'react-router-dom';
import ReducerTutorial from '../pages/reduxTutorial/ReducerTutorial';
import HomePage from '../pages/homePage/HomePage';
import ReduxToolkitTutorial from '../pages/reduxToolkitPage/ReduxToolkitTutorial';
import Layout from '../sharedComponents/Layout';

export const AppRouter = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/Redux-Tutorial', element: <ReducerTutorial /> },
            {
                path: '/ReduxToolkit-Tutorial',
                element: <ReduxToolkitTutorial />,
            },
            { path: '/Home', element: <HomePage /> },
            { path: '*', loader: () => redirect('/Home') },
            { path: '/', loader: () => redirect('/Home') },
        ],
    },
]);
