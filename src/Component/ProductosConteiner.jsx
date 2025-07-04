import { useState } from "react";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import { useProductos } from "../contexts/ProductosContext";
import Footer from "./Footer";
import { Helmet } from 'react-helmet';
import "../styles/productosContainer.css";

export default function ProductosContainer() {
    const productosPorPagina = 8;
    const [paginaActual, setPaginaActual] = useState(1);
    const { admin, logoutAdmin } = useAdminContext();
    const navigate = useNavigate();
    const { productosFiltrados } = useProductos();

    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    const handleLogout = () => {
        logoutAdmin();
        navigate("/");
    };

    const cambiarPagina = (numero) => {
        setPaginaActual(numero);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Helmet>
                <title>Productos | Tannat & Co</title>
                <meta name="description" content="Explora nuestra variedad de productos." />
            </Helmet>
            <h2>PRODUCTOS</h2>

            {admin && (
                <div>
                    <Link to="/admin">
                        <button className="productos-boton-admin">Volver a menú Admin</button>
                    </Link>
                    <button onClick={handleLogout} className="productos-boton-admin">Salir de Admin</button>
                </div>
            )}

            <div className="productos-container">
                {productosActuales.length > 0 ? (
                    productosActuales.map(producto => (
                        <Card key={producto.id} producto={producto} />
                    ))
                ) : (
                    <p className="sin-resultados">No se encontraron productos para la búsqueda.</p>
                )}
            </div>

            {/* PAGINADOR */}
            {totalPaginas > 1 && (
                <div className="paginador">
                    {Array.from({ length: totalPaginas }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => cambiarPagina(index + 1)}
                            className={paginaActual === index + 1 ? "pagina-activa" : ""}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}

            <Footer />
        </div>
    );
}
