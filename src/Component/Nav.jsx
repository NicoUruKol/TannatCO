import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTools, FaUser, FaBars } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import Logo from "../assets/logo_photoshop_LARGO.png";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContexts";
import { useAuthContext } from "../contexts/LoginContext";
import { useProductos } from "../contexts/ProductosContext";

import "../styles/nav.css";
import { Container } from "react-bootstrap";

export default function Nav() {
    const { productosCarrito } = useContext(CarritoContext);
    const { currentUser, logout } = useAuthContext();
    const { productos } = useProductos();

    const [busqueda, setBusqueda] = useState("");
    const [openSuggest, setOpenSuggest] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showMainMenu, setShowMainMenu] = useState(false);

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
        setOpenSuggest(true);
    };

    const handleSelect = (id) => {
        setBusqueda("");
        setOpenSuggest(false);
        navigate(`/productos/${id}`);
    };

    const handleBlur = () => {
        setTimeout(() => setOpenSuggest(false), 120);
    };

    return (
        <Container fluid className="px-0">
            <div className="my-nav-barra-superior">
                <button
                    className="toggler-superior"
                    onClick={() => setShowUserMenu((prev) => !prev)}
                    aria-label="Menú usuario"
                    >
                    <FaBars />
                </button>

                <div className="my-nav-busqueda-container">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Buscar productos..."
                        className="form-control nav-input-busqueda"
                        value={busqueda}
                        onChange={handleInputChange}
                        onFocus={() => setOpenSuggest(true)}
                        onBlur={handleBlur}
                    />

                    {openSuggest && sugerencias.length > 0 && (
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

                <ul className="sup-links">
                    {!currentUser ? (
                        <>
                        <li>
                            <NavLink className="my-nav-superior-link-1" to="/login">
                            <FaUser /> Iniciar Sesión
                            </NavLink>
                        </li>
                        {/* Crear cuenta sólo visible ≥768 */}
                        <li className="crear-cuenta-link">
                            <NavLink className="my-nav-superior-link-2" to="/registro">
                            Crear Cuenta
                            </NavLink>
                        </li>
                        </>
                    ) : (
                        <>
                        <li className="my-nav-superior-link-3">
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
                        <NavLink className="my-nav-superior-link-4" to="/admin">
                        <FaTools /> Admin
                        </NavLink>
                    </li>
                </ul>

                {showUserMenu && (
                <ul className="sup-links-collapsed open">
                    {!currentUser ? (
                    <>
                        <li>
                            <NavLink
                                className="my-nav-superior-link-1"
                                to="/login"
                                onClick={() => setShowUserMenu(false)}
                            >
                                <FaUser /> Iniciar Sesión
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="my-nav-superior-link-2"
                                to="/registro"
                                onClick={() => setShowUserMenu(false)}
                            >
                                Crear Cuenta
                            </NavLink>
                        </li>
                    </>
                    ) : (
                    <>
                        <li className="my-nav-superior-link-3">
                            Hola, <span>{currentUser.email.split("@")[0]}</span>
                        </li>
                        <li>
                            <button
                                className="my-nav-superior-link-cierre"
                                onClick={() => {
                                logout();
                                setShowUserMenu(false);
                                }}
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </>
                    )}
                    <li>
                        <NavLink
                            className="my-nav-superior-link-4"
                            to="/admin"
                            onClick={() => setShowUserMenu(false)}
                        >
                            <FaTools /> Admin
                        </NavLink>
                    </li>
                </ul>
                )}
            </div>

            <nav className="nav-container">
                <div className="nav-logo">
                    <NavLink to="/">
                        <img src={Logo} alt="TANNAT&CO" className="logo-img" />
                    </NavLink>
                </div>
                <button
                    className="toggler-inferior"
                    onClick={() => setShowMainMenu((prev) => !prev)}
                    aria-label="Menú principal"
                    >
                    <FaBars />
                </button>

                <ul className="nav-links">
                    <li><NavLink className="nav-link" to="/" end>Inicio</NavLink></li>
                    <li><NavLink className="nav-link" to="/AboutUs">Nosotros</NavLink></li>
                    <li><NavLink className="nav-link" to="/Contacto">Contacto</NavLink></li>
                    <li className="producto-link">
                        <NavLink className="nav-link" to="/productos">Productos</NavLink>
                    </li>
                </ul>
                <NavLink className="nav-linkCarrito-link" to="/carrito">
                    <ShoppingCart size={56} />
                    {productosCarrito.length > 0 && (
                        <span className="carrito-contador">{productosCarrito.length}</span>
                )}
                </NavLink>
                <ul className={`nav-links-collapsed ${showMainMenu ? "open" : ""}`}>
                    <li>
                        <NavLink
                            className="nav-link"
                            to="/"
                            end
                            onClick={() => setShowMainMenu(false)}
                            >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className="nav-link"
                        to="/AboutUs"
                        onClick={() => setShowMainMenu(false)}
                        >
                        Nosotros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className="nav-link"
                        to="/Contacto"
                        onClick={() => setShowMainMenu(false)}
                        >
                        Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}