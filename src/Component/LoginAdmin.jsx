import { Navigate } from "react-router-dom";

export default function LoginAdmin({ setLogueadoAdmin, admin }) {
    if (admin) {
        return <Navigate to="/admin" replace />;
    }

    return (
        <div>
            <button className="login-container" onClick={setLogueadoAdmin}>
                Iniciar sesión Admin
            </button>
        </div>
    );
}


