import { useNavigate } from "react-router-dom";

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
            <button onClick={manejarClick}>
                {user ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
        </div>
    );
}

