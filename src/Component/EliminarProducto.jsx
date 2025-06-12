import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductos } from "../contexts/ProductosContext";
import { dispararSweetConfirmar } from "../assets/sweetAlert";
import { dispararSweetError } from "../assets/sweetAlertError";
import { dispararSweetDoble } from "../assets/sweetAlertDoble";

const EliminarProducto = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {productos, eliminarProducto } = useProductos();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const prod = productos.find((p) => p.id === id);
        if (prod) {
        setProducto(prod);
        }
        setCargando(false);
    }, [id, productos]);

    const handleEliminar = async () => {
        const confirmar =  await dispararSweetDoble(
        `Vas a eliminar el producto "${producto.name}". Esta acción no se puede deshacer.`,
        true
        );

        if (confirmar.isConfirmed) {
        try {
            await eliminarProducto(id);
            console.log(producto.id);
            await dispararSweetConfirmar(
            "Producto eliminado",
            "El producto fue eliminado correctamente",
            "success",
            false
            );
            navigate("/admin/eliminarProducto");
        } catch (error) {
            dispararSweetError(
            "Error al eliminar",
            "Hubo un problema al eliminar el producto. Intenta nuevamente."
            );
        }
        }
    };

    const handleCancelar = () => {
        navigate("/admin/eliminarProducto");
    };

    if (cargando) {
        return <p style={{ textAlign: "center" }}>Cargando...</p>;
    }

    if (!producto) {
        return <p style={{ textAlign: "center", color: "red" }}>Producto no encontrado</p>;
    }

    return (
        <div className="eliminar-producto-container" style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>Eliminar Producto</h2>
        <img
            src={producto.avatar}
            alt={`Imagen de ${producto.name}`}
            style={{ width: "100%", maxHeight: "200px", objectFit: "contain", marginBottom: "1rem" }}
        />
        <p>
            ¿Deseas eliminar el producto <strong>{producto.name}</strong>?
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
            <button onClick={handleEliminar}>
            Eliminar
            </button>
            <button onClick={handleCancelar} style={{ padding: "0.5rem 1rem" }}>
            Cancelar
            </button>
        </div>
        </div>
    );
};

export default EliminarProducto;
