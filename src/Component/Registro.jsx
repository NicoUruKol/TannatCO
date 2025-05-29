import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../styles/registro.css";
import { dispararSweetConfirmar } from '../assets/sweetAlert';
import { dispararSweetError } from '../assets/sweetAlertError'

export default function RegistroUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegistroUser = async (e) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            dispararSweetConfirmar('¡Éxito!', 'Usuario creado con éxito', 'success');
            
            
            setTimeout(() => navigate('/'), 1500); 
        } catch (error) {
            dispararSweetError(`Error al crear usuario: ${error.message}`);
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
            <input 
                type="password" 
                value={password} 
                placeholder="Mínimo 6 caracteres" 
                onChange={e => setPassword(e.target.value)} 
                required 
            />

            <button type="submit">Registrarse</button>
        </form>
    );
}