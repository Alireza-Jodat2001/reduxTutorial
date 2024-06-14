import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReducerTutorial from '../pages/reduxTutorial/ReducerTutorial';
import HomePage from '../pages/homePage/HomePage';
import RedirectComponent from '../generalOperations/RedirectComponent';
import { Provider } from 'react-redux';
import { infoStore } from '../pages/reduxToolkitPage/infoReducer/infoStore';
import ReduxToolkitTutorial from '../pages/reduxToolkitPage/ReduxToolkitTutorial';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Provider store={infoStore}>
                <RedirectComponent />
                <Routes>
                    <Route
                        path="/Redux-Tutorial"
                        element={<ReducerTutorial />}
                    />
                    <Route
                        path="/ReduxToolkit-Tutorial"
                        element={<ReduxToolkitTutorial />}
                    />
                    <Route path="/Home" element={<HomePage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}
