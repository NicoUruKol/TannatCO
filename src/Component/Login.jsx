import { useNavigate } from "react-router-dom";
import "../styles/login.css"

export default function Login({ setLogueadoUser, user }) {
    const navigate = useNavigate();

    function manejarClick() {
        setLogueadoUser(); 
        if (!user) {
            
            navigate("/pagos");
        } else {
            
            navigate("/");
        }
    }

    return (
        <div>
            <button className="login-container" onClick={manejarClick}>
                {user ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
        </div>
    );
}
//*********************************************** */
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import "../styles/login.css"


export default function Login() {
    const [user, setLogueadoUser] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulación de autenticación
        if (user === 'invitado' && password === '1234') {
        login(user);
        navigate('/pagos');
        } else {
        alert('Credenciales incorrectas');
        }
    };

    function manejarClick() {
        setLogueadoUser(); 
        if (!user) {
            
            navigate("/pagos");
        } else {
            
            navigate("/");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div>
            <label>Usuario:</label>
            <input
            type="text"
            value={user}
            onChange={(e) => setLogueadoUser(e.target.value)}
            />
        </div>
        <div>
            <label>Contraseña:</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit" onClick={manejarClick}>Iniciar sesión</button>
        </form>
    );
    }
*/
