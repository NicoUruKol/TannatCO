import { useEffect, useState } from "react";
import "../styles/productos.css";
import Card from "./Card";
import Footer from "./Footer"


export default function ProductosContainer({funcionCarrito }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://68100d9127f2fdac24101f8a.mockapi.io/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                console.log(datos);
                setProductos(datos);
                setCargando(false);
            })
            .catch((error) => {
                console.log('Error', error);
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, []);

    if (cargando) return <p>Cargando Productos</p>;
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
            <Footer/>
        </div>
    );
}