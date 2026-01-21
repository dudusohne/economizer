import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Login } from '../pages/Login';
import { List } from '../pages/List';
import Settings from '../pages/Settings';
import { Categories } from '../pages/Categories';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list/:id" element={<List />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </Router>
    );
}
