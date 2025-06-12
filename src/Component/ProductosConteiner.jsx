import { useState, useEffect } from "react";
import Card from "./Card";

export default function ProductosContainer() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('https://68100d9127f2fdac24101f8a.mockapi.io/productos')
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="productos-container">
        {productos.map(producto => (
            <Card key={producto.id} producto={producto} />
        ))}
        </div>
    );
}
