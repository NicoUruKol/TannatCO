import "../styles/productos.css";
import { Link, useLocation } from "react-router-dom";
import { formatearPrecio } from "./FomatoPrecio";

export default function Card({ producto }) {
    const location = useLocation();
    const path = location.pathname;

    let ruta = `/productos/${producto.id}`;
    let textoBoton = "+ Info";

    if (path.includes("/admin/editarProducto")) {
        ruta = `/admin/editarProducto/${producto.id}`;
        textoBoton = "Editar";
    } else if (path.includes("/admin/eliminarProducto")) {
        ruta = `/admin/eliminarProducto/${producto.id}`;
        textoBoton = "Eliminar";
    }

    return (
        <div className="productos-card">
        <img className="productos-image" src={producto.avatar} alt={producto.name} />
        <h3>{producto.name}</h3>
        <h3 className="productos-precio">$ {formatearPrecio(producto.price)}</h3>
        <Link to={ruta}>
            <button className={`productos-boton ${textoBoton === "Eliminar" ? "eliminar" : ""}`}>
            {textoBoton}
            </button>
        </Link>
        </div>
    );
}
