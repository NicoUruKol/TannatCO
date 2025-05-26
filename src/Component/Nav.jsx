import { Link } from "react-router-dom";
import "../styles/nav.css";
import { FaTools, FaUser } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import Logo from '../assets/logo_photoshop_LARGO.png'
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContexts";

function Nav({}) {
    const {productosCarrito} = useContext(CarritoContext)

    return (
        <>
            <div className="nav-barra-superior">
                <ul>
                    <li><Link className="nav-superior-link" to="/login"><FaUser /> iniciar sesion</Link></li>
                    <li><Link className="nav-superior-link" to="/crearCuenta">crear cuenta</Link></li>
                    <li><Link className="nav-superior-link" to="/admin"><FaTools /> admin</Link></li>
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
                        {productosCarrito.length}</span>)}
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Nav;
