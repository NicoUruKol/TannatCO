import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/registro.css";
import { dispararSweetConfirmar } from '../assets/sweetAlert';
import { dispararSweetError } from '../assets/sweetAlertError'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function RegistroUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [mostrarPassword, setMostrarPassword] = useState(false);

    const handleRegistroUser = async (e) => {
        e.preventDefault();
        
        const auth = getAuth();
        try {
            
            await createUserWithEmailAndPassword(auth, email, password);
            
            dispararSweetConfirmar('¡Éxito!', 'Usuario creado con éxito', 'success');
            setTimeout(() => navigate('/'), 1500); 
        } catch (error) {
        console.error('Error de Firebase:', error);

        let mensajeError = '';

        switch (error.code) {
            case 'auth/email-already-in-use':
                mensajeError = 'El correo ya está registrado.';
                break;
            case 'auth/invalid-email':
                mensajeError = 'El correo ingresado no es válido.';
                break;
            case 'auth/weak-password':
                mensajeError = 'La contraseña debe tener al menos 6 caracteres.';
                break;
            default:
                mensajeError = 'Ocurrió un error inesperado. Intenta nuevamente.';
                break;
        }

        dispararSweetError(mensajeError);
    }
    };

    return (
        <form className="registro-container" onSubmit={handleRegistroUser}>
            <h2>Crea tu cuenta</h2>
            <label>Email:</label>
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
            <button type="submit">Registrarse</button>
        </form>
    );
}