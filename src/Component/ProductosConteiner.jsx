import { useProductos } from "../contexts/ProductosContext";
import "../styles/productos.css";
import Card from "./Card";
import Footer from "./Footer";

export default function ProductosContainer({ funcionCarrito }) {
    const { productos, error, cargando } = useProductos();

    if (cargando) return <p>Cargando Productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
        <div className="productos-container">
            {productos.map((producto) => (
            <Card
                key={producto.id}
                producto={producto}
                funcionCarrito={funcionCarrito}
            />
            ))}
        </div>
        <Footer />
        </div>
    );
}