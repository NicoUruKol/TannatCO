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

