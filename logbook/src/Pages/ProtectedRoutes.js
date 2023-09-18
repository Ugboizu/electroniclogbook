import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const location = useLocation();
    let isLoggedIn = () => {
        return localStorage.getItem("loggedIn") === "true" ? 1 : 0
    };
    console.log(isLoggedIn());
    return isLoggedIn() ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
};

export default ProtectedRoutes;