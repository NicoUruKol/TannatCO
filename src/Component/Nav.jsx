import { NavLink } from "react-router-dom";
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
                        <li><NavLink className="nav-superior-link" to="/login"><FaUser /> Iniciar Sesión</NavLink></li>
                        <li><NavLink className="nav-superior-link" to="/registro">Crear Cuenta</NavLink></li>
                        </>
                    ) : (
                        <>
                            <li className="nav-superior-link">Hola, <span>{currentUser.email.split('@')[0]}</span></li>
                            <li><button className="nav-superior-link-cierre" onClick={logout}>Cerrar Sesión</button></li>
                        </>
                    )}
                    <li><NavLink className="nav-superior-link" to="/admin"><FaTools /> Admin</NavLink></li>
                </ul>
            </div>

            <nav className="nav-container">
                <div className="nav-logo">
                    <NavLink to="/">
                        <img src={Logo} alt="TANNAT&CO" className="logo-img" />
                    </NavLink>
                </div>
                <ul className="nav-links">
                    <li><NavLink className="nav-link" to="/" end>Inicio</NavLink></li>
                    <li><NavLink className="nav-link" to="/AboutUs">Nosotros</NavLink></li>
                    <li><NavLink className="nav-link" to="/Contacto">Contacto</NavLink></li>
                    <li><NavLink className="nav-link" to="/productos">Productos</NavLink></li>
                </ul>
                <div>
                    <NavLink className="nav-link carrito-link" to="/carrito">
                        <ShoppingCart size={52} />
                        {productosCarrito.length > 0 && (
                            <span className="carrito-contador">
                                {productosCarrito.length}
                            </span>
                        )}
                    </NavLink>
                </div>
            </nav>
        </>
    );
}

export default Nav;
