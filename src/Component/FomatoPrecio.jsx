
export function formatearPrecio(precio, conDecimales = true) {
    return precio.toLocaleString("es-AR", {
    minimumFractionDigits: conDecimales ? 2 : 0,
    maximumFractionDigits: conDecimales ? 2 : 0,
    });
}
