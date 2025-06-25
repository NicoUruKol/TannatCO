import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuthContext } from '../contexts/LoginContext';
import "../styles/login.css";
import { dispararSweetConfirmar } from '../assets/sweetAlert';
import { dispararSweetError } from '../assets/sweetAlertError';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || '/';
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mostrarCrearUsuario, setMostrarCrearUsuario] = useState(false);

    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validarEmail(email)) {
            dispararSweetError('El formato del correo es inválido.');
            return;
        }

        try {
            await login(email, password);

            dispararSweetConfirmar('¡Éxito!', 'Has iniciado sesión correctamente.', 'success');
            setTimeout(() => navigate(from, { replace: true }), 1500);
        } catch (error) {
            console.error('Error de Firebase:', error);
            
            let mensajeError = '';

            switch (error.code) {
                case 'auth/invalid-credential':
                    mensajeError = 'Email o contraseña incorrectos.';
                    setMostrarCrearUsuario(true);
                    break;
                case 'auth/invalid-email':
                    mensajeError = 'El formato del correo es inválido.';
                    break;
                case 'auth/too-many-requests':
                    mensajeError = 'Demasiados intentos fallidos. Espera un momento.';
                    break;
                case 'auth/user-disabled':
                    mensajeError = 'Este usuario ha sido deshabilitado.';
                    break;
                default:
                    mensajeError = `Error desconocido: ${error.code}`;
                    break;
            }

            dispararSweetError(`Error al iniciar sesión: ${mensajeError}`);
        }
    };

    return (
        <form className="login-container" onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <label>Usuario:</label>
            <input 
                type="email" 
                value={email} 
                placeholder="tucorreo@ejemplo.com"
                onChange={e => setEmail(e.target.value)} 
                required 
            />

            <label>Contraseña:</label>
            <div className='input-password-container'>
                <input 
                    type={mostrarPassword ? "text" : "password"} 
                    value={password} 
                    placeholder="Mínimo 6 caracteres" 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
                <span 
                    className="icon-eye"
                    onClick={() => setMostrarPassword(!mostrarPassword)}>
                    {mostrarPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>

            <div>
                <button type="submit">Iniciar sesión</button>
                {mostrarCrearUsuario && (
                <div className="crear-usuario-container">
                    <p>¿No tenés cuenta o escribiste mal tu usuario?</p>
                    <Link to="/Registro">
                        <button type="button">Crear usuario</button>
                    </Link>
                </div>
                )}
            </div>
        </form>
    );
}
