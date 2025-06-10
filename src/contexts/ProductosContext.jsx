import React, { createContext, useState, useContext} from "react";

const ProductosContext = createContext();

export function ProductosProvider({ children}){
    try {
        const respuesta = await fetch('https://68100d9127f2fdac24101f8a.mockapi.io/productos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto),
        });

        if (!respuesta.ok) throw new Error('Error al agregar el producto');

        const data = await respuesta.json();
        return data;
    } catch (error) {
        throw error;
    }
};

