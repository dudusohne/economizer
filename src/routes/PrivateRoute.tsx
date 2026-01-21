import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader />;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
