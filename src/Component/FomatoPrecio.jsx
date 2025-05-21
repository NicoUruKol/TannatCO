
export const formatearPrecio = (precio) => {
    return Number(precio).toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
    });
};
