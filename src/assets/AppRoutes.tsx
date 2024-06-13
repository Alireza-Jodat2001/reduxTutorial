import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReducerTutorial from './ReducerTutorial';
import HomePage from './HomePage';
import RedirectComponent from './RedirectComponent';
import ReduxToolkitTutorial from './ReduxToolkitTutorial';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <RedirectComponent />
            <Routes>
                <Route path="/Redux-Tutorial" element={<ReducerTutorial />} />
                <Route
                    path="/ReduxToolkit-Tutorial"
                    element={<ReduxToolkitTutorial />}
                />
                <Route path="/Home" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}
