import { Outlet } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
const AdminRoutes = () => {
    return (
        <ProtectedRoute requireAdmin>
            <Outlet />
        </ProtectedRoute>
    )
}

export default AdminRoutes;