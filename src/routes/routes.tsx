import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { List } from '../pages/List';
import { Products } from '../pages/Products';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    );
}
