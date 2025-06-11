import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductoDetalle.css";
import { dispararSweetConfirmar } from "../assets/sweetAlert";
import { formatearPrecio } from "./FomatoPrecio";
import Footer from "./Footer";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContexts";
import { useProductos } from "../contexts/ProductosContext";


export default function ProductoDetalle({}){
    const {agregarAlCarrito} = useContext(CarritoContext)
    const { id } = useParams();
    const { productos, cargando, error } = useProductos(); // Contexto
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        if (productos.length > 0) {
            const productoEncontrado = productos.find((item) => item.id === id);
            setProducto(productoEncontrado || null);
        }
    }, [productos, id]);

    const funcionCarrito = () => {
        if (cantidad < 1) return;
        dispararSweetConfirmar("Agregado!!!", "El producto ha sido agregado con exito!!!", "success");
        agregarAlCarrito({ ...producto, cantidad });
    };

    const sumarContador = () => setCantidad((prev) => prev + 1);
    const restarContador = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

    if (cargando) return <p>Cargando producto...</p>;
    if (error) return <p>{error}</p>;
    if (!producto) return <p>Producto no encontrado.</p>;

    return (
        <div>
            <div className="detalle-container">
                <img className="detalle-imagen" src={producto.avatar} alt={producto.name} />
                <div className="detalle-info">
                    <h2>{producto.name}</h2>
                    <p>{producto.description}</p>
                    <p className="detalle-info-peso">$ {formatearPrecio(producto.price)}</p>
                    <div>
                        <button onClick={restarContador} className="agregar-boton-signo">-</button>
                        <span style={{margin: "0 10px"}}>{cantidad}</span>
                        <button onClick={sumarContador} className="agregar-boton-signo">+</button>
                    </div>
                    <button className="agregar-boton" onClick={funcionCarrito}>Agregar al carrito</button>
                    <div>
                        <Link to="/productos">
                            <button className="mover-boton-1">Volver a productos</button>
                        </Link>
                        <Link to="/carrito">
                            <button className="mover-boton-2">Ir al carrito</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
    }
