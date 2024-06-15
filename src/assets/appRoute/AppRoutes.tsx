import { createBrowserRouter, redirect } from 'react-router-dom';
import ReducerTutorial from '../pages/reduxTutorial/ReducerTutorial';
import HomePage from '../pages/homePage/HomePage';
import ReduxToolkitTutorial from '../pages/reduxToolkitPage/ReduxToolkitTutorial';
import Layout from '../sharedComponents/Layout';
import Error from '../sharedComponents/Error';
import { loaderInfoId } from '../pages/reduxToolkitPage/operations/ReduxOperation';
// import { loader as loaderInfo } from '../pages/reduxToolkitPage/operations/ReduxOperation';

export const AppRouter = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Error />,
        children: [
            { path: '/Redux-Tutorial', element: <ReducerTutorial /> },
            {
                path: '/ReduxToolkit-Tutorial',
                element: <ReduxToolkitTutorial />,
                // loader: loaderInfo,
            },
            {
                path: '/ReduxToolkit-Tutorial/:infoId',
                element: <ReduxToolkitTutorial />,
                loader: loaderInfoId,
            },
            { path: '/Home', element: <HomePage /> },
            { path: '*', loader: () => redirect('/Home') },
            { path: '/', loader: () => redirect('/Home') },
        ],
    },
]);
