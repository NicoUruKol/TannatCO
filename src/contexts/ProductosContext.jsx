import { createContext, useContext, useEffect, useState } from 'react';

const ProductosContext = createContext();

export const useProductos = () => useContext(ProductosContext);

const API_URL = 'https://68100d9127f2fdac24101f8a.mockapi.io/productos';

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

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
    const res = await fetch(`https://mockapi.io/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosActualizados)
    });
    const actualizado = await res.json();
    setProductos(prev => prev.map(p => p.id === id ? actualizado : p));
    };

    const eliminarProducto = async (id) => {
    await fetch(`https://mockapi.io/productos/${id}`, {
        method: 'DELETE'
    });
    setProductos(prev => prev.filter(p => p.id !== id));
    };

    useEffect(() => {
    obtenerProductos();
    }, []);

    return (
        <ProductosContext.Provider value={{
            productos,
            obtenerProductos,
            agregarProducto,
            editarProducto,
            eliminarProducto
        }}>
            {children}
        </ProductosContext.Provider>
    );
};
