import { Navigate } from "react-router-dom";
import { useAdminContext } from '../contexts/AdminContext.jsx';
import { dispararSweetConfirmar } from '../assets/sweetAlert.js';
import { useState } from "react";
import { dispararSweetError } from "../assets/sweetAlertError.js";

export default function LoginAdmin() {
    const { admin, loginAdmin } = useAdminContext();
    const [redirect, setRedirect] = useState(false);

    if (admin || redirect) {
        return <Navigate to="/admin" replace />;
    }

    const handleLoginAdmin = () => {
        const usuario = 'admin';
        const password = '1234';
        
        if (loginAdmin(usuario, password)) {
            dispararSweetConfirmar('Ingreso exitoso', `Bienvenido, ${usuario}!`, 'success' )(
                ).then(() => {
                setRedirect(true);
            });
        } else {
            dispararSweetError('Usuario o contraseña incorrectos')(
                'Error',
                
                'error'
            );
        }
    };

    return (
        <div>
            <button className="login-container" onClick={handleLoginAdmin}>
                Iniciar sesión Admin
            </button>
        </div>
    );
}


