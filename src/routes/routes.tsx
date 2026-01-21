import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Login } from '../pages/Login';
import { List } from '../pages/List';
import Settings from '../pages/Settings';
import { Categories } from '../pages/Categories';
import { PrivateRoute } from './PrivateRoute';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* ROTAS PÚBLICAS */}
                <Route path="/login" element={<Login />} />

                {/* ROTAS PRIVADAS */}
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/list/:id"
                    element={
                        <PrivateRoute>
                            <List />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/products"
                    element={
                        <PrivateRoute>
                            <Products />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/settings"
                    element={
                        <PrivateRoute>
                            <Settings />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/categories"
                    element={
                        <PrivateRoute>
                            <Categories />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}
