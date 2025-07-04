import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTools, FaUser } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import Logo from "../assets/logo_photoshop_LARGO.png";

import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContexts";
import { useAuthContext } from "../contexts/LoginContext";
import { useProductos } from "../contexts/ProductosContext";

import "../styles/nav.css";

function Nav() {
    const { productosCarrito } = useContext(CarritoContext);
    const { currentUser, logout } = useAuthContext();
    const { productos } = useProductos();          
    const [busqueda, setBusqueda] = useState("");
    const [open, setOpen] = useState(false);       
    const navigate = useNavigate();
    const inputRef = useRef(null);

    
    const sugerencias = productos
        .filter(
        (p) =>
            busqueda.trim() &&
            p.name.toLowerCase().includes(busqueda.trim().toLowerCase())
        )
        .slice(0, 8); 

    
    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
        setOpen(true);
    };

    const handleSelect = (id) => {
        setBusqueda("");
        setOpen(false);
        navigate(`/productos/${id}`); 
    };

    const handleBlur = () => {
        
        setTimeout(() => setOpen(false), 120);
    };

    return (
        <>
        
        <div className="my-nav-barra-superior">
            <div className="my-nav-busqueda-container">
            <input
                ref={inputRef}
                type="text"
                placeholder="Buscar productos..."
                className="form-control nav-input-busqueda"
                value={busqueda}
                onChange={handleInputChange}
                onFocus={() => setOpen(true)}
                onBlur={handleBlur}
            />

            
            {open && sugerencias.length > 0 && (
                <ul className="busqueda-dropdown">
                    {sugerencias.map((p) => (
                        <li
                        key={p.id}
                        className="busqueda-item"
                        onMouseDown={() => handleSelect(p.id)}
                    >
                        <img src={p.avatar} className="busqueda-thumb" />
                        <span className="busqueda-texto">{p.name}</span>
                    </li>
                    ))}
                </ul>
)}
            </div>

            <ul>
            {!currentUser ? (
                <>
                <li>
                    <NavLink className="my-nav-superior-link" to="/login">
                    <FaUser /> Iniciar Sesión
                    </NavLink>
                </li>
                <li>
                    <NavLink className="my-nav-superior-link" to="/registro">
                    Crear Cuenta
                    </NavLink>
                </li>
                </>
            ) : (
                <>
                <li className="my-nav-superior-link">
                    Hola, <span>{currentUser.email.split("@")[0]}</span>
                </li>
                <li>
                    <button
                    className="my-nav-superior-link-cierre"
                    onClick={logout}
                    >
                    Cerrar Sesión
                    </button>
                </li>
                </>
            )}
            <li>
                <NavLink className="my-nav-superior-link" to="/admin">
                <FaTools /> Admin
                </NavLink>
            </li>
            </ul>
        </div>

        
        <nav className="nav-container">
            <div className="nav-logo">
            <NavLink to="/">
                <img src={Logo} alt="TANNAT&CO" className="logo-img" />
            </NavLink>
            </div>

            <ul className="nav-links">
            <li>
                <NavLink className="nav-link" to="/" end>
                Inicio
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/AboutUs">
                Nosotros
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/Contacto">
                Contacto
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-link" to="/productos">
                Productos
                </NavLink>
            </li>
            </ul>

            <div>
            <NavLink className="nav-linkCarrito-link" to="/carrito">
                <ShoppingCart size={56} />
                {productosCarrito.length > 0 && (
                <span className="carrito-contador">{productosCarrito.length}</span>
                )}
            </NavLink>
            </div>
        </nav>
        </>
    );
}

export default Nav;
