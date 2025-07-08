import { Navigate } from "react-router-dom";
import { useState } from "react"; 
import { useAdminContext } from '../contexts/AdminContext'; 
import { dispararSweetConfirmar } from '../assets/sweetAlert.js';
import { dispararSweetError } from "../assets/sweetAlertError.js";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/loginAdmin.css'
import { Container } from "react-bootstrap";

export default function LoginAdmin() {
    const { admin, loginAdmin } = useAdminContext();
    const [adminInput, setAdminInput] = useState('');
    const [passwordAdminInput, setPasswordAdminInput] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const handleLoginAdmin = () => {
        const usuario = adminInput.trim();
        const password = passwordAdminInput;

        if (usuario === 'admin' && password === '1234') {
            loginAdmin(usuario, password);
            dispararSweetConfirmar('Ingreso exitoso', `Bienvenido, ${usuario}!`, 'success');
            setRedirect(true); 
        } else {
            dispararSweetError('Usuario o contraseña incorrectos');
        }
    };

    if (admin || redirect) {
        return <Navigate to="/Admin" replace />;
    }

    return (
        <Container fluid className="px-0">
            <div className="login-admin-container">
                <h2>Login Admin</h2>
                <label>Usuario:</label>
                <div className="admin-input-wrapper">
                    <input
                        type="text"
                        value={adminInput}
                        placeholder="Usuario"
                        onChange={(e) => setAdminInput(e.target.value.toLowerCase())}
                        required
                    />
                </div>

                <label>Contraseña:</label>
                <div className="admin-input-wrapper admin-input-wrapper--password">
                    <input
                        type={mostrarPassword ? "text" : "password"}
                        value={passwordAdminInput}
                        placeholder="Contraseña"
                        onChange={(e) => setPasswordAdminInput(e.target.value)}
                        required
                    />
                    <span className="admin-eye" onClick={() => setMostrarPassword(!mostrarPassword)}>
                        {mostrarPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <button onClick={handleLoginAdmin}>Iniciar sesión Admin</button>
            </div>
        </Container>
    );
}
