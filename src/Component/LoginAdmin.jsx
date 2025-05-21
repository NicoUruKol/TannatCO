import { Navigate } from "react-router-dom";

export default function LoginAdmin({ setLogueadoAdmin, admin }) {
    if (admin) {
        return <Navigate to="/admin" replace />;
    }

    return (
        <div>
            <button onClick={setLogueadoAdmin}>
                Iniciar sesión Admin
            </button>
        </div>
    );
}


