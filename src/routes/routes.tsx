import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { List } from '../pages/List';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </Router>
    );
}
