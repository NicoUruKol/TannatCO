import { createContext, useContext, useEffect, useState } from 'react';

const ProductosContext = createContext();
export const useProductos = () => useContext(ProductosContext);
export { ProductosContext }; 

const API_URL = 'https://68100d9127f2fdac24101f8a.mockapi.io/productos';

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const resp = await fetch(API_URL);
            if (!resp.ok) throw new Error('Error al obtener los productos');
            const data = await resp.json();
            setProductos(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
    };

    const agregarProducto = async (producto) => {
        try {
            const resp = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(producto),
            });
            if (!resp.ok) throw new Error('Error al agregar el producto');
            const nuevo = await resp.json();
            setProductos((prev) => [...prev, nuevo]);
            return nuevo;
        } catch (err) {
            throw err;
        }
    };

    const editarProducto = async (id, datosActualizados) => {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosActualizados)
        });
        const actualizado = await res.json();
        setProductos(prev => prev.map(p => p.id === id ? actualizado : p));
    };

    const eliminarProducto = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("No se pudo eliminar el producto");
            }

            setProductos((prev) => prev.filter((p) => p.id !== id));
        } catch (error) {
            console.error("Error eliminando producto:", error);
            throw error; 
        }
    };

    const productosFiltrados = productos.filter(producto =>
        producto.name.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <ProductosContext.Provider value={{
            productos,
            obtenerProductos,
            agregarProducto,
            editarProducto,
            eliminarProducto,
            busqueda,
            setBusqueda,
            productosFiltrados,
            cargando,
            error
        }}>
            {children}
        </ProductosContext.Provider>
    );
};
