import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/LoginContext';
import "../styles/login.css";
import { dispararSweetConfirmar } from '../assets/sweetAlert';
import { dispararSweetError } from '../assets/sweetAlertError';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);

            dispararSweetConfirmar('¡Éxito!', 'Has iniciado sesión correctamente.', 'success');

            setTimeout(() => navigate(from, { replace: true }), 1500);
        } catch (error) {
            const errorCode = error.code;

            let message = 'Error al iniciar sesión. Inténtalo de nuevo.';
            if (errorCode === 'auth/wrong-password') {
                message = 'La contraseña es incorrecta.';
            } else if (errorCode === 'auth/user-not-found') {
                message = 'No existe un usuario con ese email.';
            }


            dispararSweetError('Oops...', message, 'error');
        }
    };

    return (
        <form className="login-container" onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <label>Usuario:</label>
            <input type="email" value={email} placeholder="tucorreo@ejemplo.com"onChange={e => setEmail(e.target.value)} required />

            <label>Contraseña:</label>
            <input type="password" value={password} placeholder="Mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} required />

            <button type="submit">Iniciar sesión</button>
        </form>
    );
}