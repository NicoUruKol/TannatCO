import { useAuthContext } from "../contexts/LoginContext";
import { useAdminContext } from "../contexts/AdminContext";
import { Navigate, useLocation } from "react-router-dom";

export default function RutaProtegidaPagos({ children }) {
    const { currentUser } = useAuthContext();
    const { admin } = useAdminContext();
    const location = useLocation();

    if (currentUser || admin) {
        return children;
    }

    return <Navigate to="/login" replace state={{ from: location }} />;
}
