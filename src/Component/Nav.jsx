import { Link } from "react-router-dom";
import "../styles/nav.css";
import { FaTools, FaUser } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import Logo from '../assets/logo_photoshop_LARGO.png'
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContexts";
import { useAuthContext } from "../contexts/LoginContext";

function Nav() {
    const { productosCarrito } = useContext(CarritoContext);
    const { currentUser, logout } = useAuthContext();

    return (
        <>
            <div className="nav-barra-superior">
                <ul>
                    {!currentUser ? (
                        <>
                            <li><Link className="nav-superior-link" to="/login"><FaUser /> Iniciar Sesión</Link></li>
                            <li><Link className="nav-superior-link" to="/registro">Crear Cuenta</Link></li>
                        </>
                    ) : (
                        <>
                            <li className="nav-superior-link">Hola, <span>{currentUser.email.split('@')[0]}</span>
</li>
                            <li><button className="nav-superior-link" style= {{color: "var(--color-separador)"}}onClick={logout}>Cerrar Sesión</button></li>
                        </>
                    )}
                    <li><Link className="nav-superior-link" to="/admin"><FaTools /> Admin</Link></li>
                </ul>
            </div>

            <nav className="nav-container">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={Logo} alt="TANNAT&CO" className="logo-img" />
                    </Link>
                </div>
                <ul className="nav-links">
                    <li><Link className="nav-link" to="/">Inicio</Link></li>
                    <li><Link className="nav-link" to="/AboutUs">Nosotros</Link></li>
                    <li><Link className="nav-link" to="/Contacto">Contacto</Link></li>
                    <li><Link className="nav-link" to="/productos">Productos</Link></li>
                </ul>
                <div>
                    <Link className="nav-link carrito-link" to="/carrito">
                        <ShoppingCart size={52} />
                        {productosCarrito.length > 0 && (
                            <span className="carrito-contador">
                                {productosCarrito.length}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Nav;
