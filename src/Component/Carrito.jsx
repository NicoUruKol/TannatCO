import "../styles/carrito.css"
import { formatearPrecio } from '../Component/FomatoPrecio';
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContexts";


export default function Carrito({setLogueadoUser}) {
    const {productosCarrito, eliminarProducto, vaciarCarrito} = useContext(CarritoContext);
    
    const subtotal = productosCarrito.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);

    return (
        <div>
            <div className="carrito-wrapper">
                <div className="carrito-container">
                    <div className="carrito-titulos">
                        <span>Imagen</span>
                        <span>Descripción</span>
                        <span>Cantidad</span>
                        <span>Unitario</span>
                        <span>Total</span>
                        <span>Eliminar</span>
                    </div>

                    {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                        <div key={producto.id} className="carrito-producto">
                            <img className="carrito-imagen" src={producto.avatar} alt={producto.name} />
                            <h2 className="carrito-nombre">{producto.name}</h2>
                            <span>x {producto.cantidad}</span>
                            <div>
                                <h3 className="carrito-precio">$ {formatearPrecio(producto.price)}</h3>
                            </div>
                            <div>
                                <h3 className="carrito-precio">$ {formatearPrecio(producto.cantidad * producto.price)}</h3>
                            </div>
                            <button 
                                onClick={() => eliminarProducto(producto.id)} 
                                style={{ color: "black", backgroundColor: "red", border: "solid 1px Black" }}
                            >x</button>
                        </div>
                    )) : <p>Tu carrito esta vacío</p>}
                </div>

                <div className="carrito-resumen">
                    <h3>Resumen</h3>
                    <p className="subtotal">Subtotal: $ {formatearPrecio(subtotal)}</p>
                    <p className="total">Total: $ {formatearPrecio(subtotal)}</p>

                    <div className="botones-resumen-container">
                        <Link to="/productos" style={{ width: "50%" }}>
                            <button className="boton-resumen seguir-comprando">Seguir comprando</button>
                        </Link>
                        <button 
                            className="boton-resumen vaciar-carrito"
                            onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>
                    </div>
                    <Link to="/login" state={{ from: "/pagos" }} className="boton-resumen-container">
                        <button onClick={setLogueadoUser} className="boton-resumen ir-a-pagar">Ir a pagar</button>
                    </Link>

                </div>

            </div>
            <Footer/>
        </div>
    );
}