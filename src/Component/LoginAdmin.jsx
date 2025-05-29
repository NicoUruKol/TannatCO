import { Navigate } from "react-router-dom";
import { useState } from "react"; 
import { useAdminContext } from '../contexts/AdminContext'; 
import { dispararSweetConfirmar } from '../assets/sweetAlert.js';
import { dispararSweetError } from "../assets/sweetAlertError.js";
import '../styles/loginAdmin.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
        <div className="login-admin-container">
            <h2>Login Admin</h2>
            <label>Usuario:</label>
            <input 
                type="text" 
                value={adminInput} 
                onChange={e => setAdminInput(e.target.value.toLowerCase())} 
                placeholder="Usuario"
                />
            <label>Contraseña:</label>
            <div className="input-password-container">
                <input 
                    type={mostrarPassword ? "text" : "password"} 
                    value={passwordAdminInput} 
                    onChange={e => setPasswordAdminInput(e.target.value)} 
                    placeholder="Contraseña"
                />
                <span 
                    className="icon-eye"
                    onClick={() => setMostrarPassword(!mostrarPassword)}
                >
                    {mostrarPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
            <button onClick={handleLoginAdmin}>Iniciar sesión Admin</button>
        </div>
    );
}
