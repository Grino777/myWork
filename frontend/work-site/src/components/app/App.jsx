import { Route, Routes } from 'react-router-dom';

import AppLayout from '../appLayout/AppLayout';

import AppWorkWindow from '../appWorkWindow/AppWorkWindow';
import NotFound404 from '../notFound404/NotFound404';
import ProductsWindow from '../productsWindow/ProductsWindow';

import './app.scss';

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<AppWorkWindow />} />
                <Route path="products" element={<AppWorkWindow />}>
                    <Route index element={<ProductsWindow />} />
                </Route>
                <Route path="test" element={<ProductsWindow />} />
                <Route path="*" element={<NotFound404 />} />
            </Route>
        </Routes>
    );
}

export default App;
