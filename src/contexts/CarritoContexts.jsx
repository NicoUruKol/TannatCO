import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [productosCarrito, setProductosCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    const agregarAlCarrito = (producto) => {
        const existe = productosCarrito.find(p => p.id === producto.id);
        if (existe) {
            const carritoActualizado = productosCarrito.map((p) => {
                if (p.id === producto.id) {
                    return { ...p, cantidad: p.cantidad + producto.cantidad };
                } else {
                    return p;
                }
            });
            setProductosCarrito(carritoActualizado);
        } else {
            setProductosCarrito([...productosCarrito, producto]);
        }
    };

    const eliminarProducto = (id) => {
        const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
        setProductosCarrito(nuevoCarrito);
    };

    const vaciarCarrito = () => {
        setProductosCarrito([]);
    };

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    }, [productosCarrito]);

    return (
        <CarritoContext.Provider value={{ productosCarrito, agregarAlCarrito, vaciarCarrito, eliminarProducto }}>
            {children}
        </CarritoContext.Provider>
    );
}
