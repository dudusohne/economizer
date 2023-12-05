import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { List } from '../pages/List';
import { Products } from '../pages/Products';
import { Login } from '../pages/Login';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/list" element={<List />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>
    );
}
