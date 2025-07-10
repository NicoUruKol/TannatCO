import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [productosCarrito, setProductosCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem("carrito");
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    const agregarAlCarrito = (entrada) => {
    const nuevos = Array.isArray(entrada) ? entrada : [entrada];
    const actualizados = [...productosCarrito];

    nuevos.forEach((producto) => {
        const existe = actualizados.find(p => p.id === producto.id);
        if (existe) {
            existe.cantidad += producto.cantidad;
        } else {
            actualizados.push(producto);
        }
    });

    setProductosCarrito(actualizados);
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
        <CarritoContext.Provider value={{
            productosCarrito,
            agregarAlCarrito,
            vaciarCarrito,
            eliminarProducto
        }}>
            {children}
        </CarritoContext.Provider>
    );
}