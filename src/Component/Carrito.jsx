import "../styles/carrito.css"
import { formatearPrecio } from '../Component/FomatoPrecio';
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContexts";
import { useAdminContext } from "../contexts/AdminContext";
import { useAuthContext } from "../contexts/LoginContext";


export default function Carrito() {
    const {productosCarrito, eliminarProducto, vaciarCarrito} = useContext(CarritoContext);
    const {currentUser} = useAuthContext();
    const navigate = useNavigate();
    const { admin } = useAdminContext();

    const subtotal = productosCarrito.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);
    

    const handlePago = () => {
    if (currentUser || admin) {
        navigate("/pagos");
    } else {
        navigate("/login", { state: { from: "/pagos" } });
    }
};


    return (
        <div>
            <div className="carrito-wrapper">
                <div className="carrito-container">
                    <div className="carrito-titulos">
                        <span>Imagen</span>
                        <span>Descripción</span>
                        <span className="precio-producto-valor">Cantidad</span>
                        <span className="precio-producto-valor">Unitario</span>
                        <span>Total</span>
                        <span>Eliminar</span>
                    </div>

                    {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                        <div key={producto.id} className="carrito-producto">
                            <img className="carrito-imagen" src={producto.avatar} alt={producto.name} />
                            <h2 className="carrito-nombre">{producto.name}</h2>
                            <span>x {producto.cantidad}</span>
                            <span className="precio-producto-valor">
                                <span className="precio-desktop">
                                $ {formatearPrecio(producto.price, true)}
                                </span>
                                <span className="precio-mobile">
                                    $ {formatearPrecio(producto.price, false)}
                                </span>
                            </span>
                            <span>
                                <span className="precio-desktop">
                                    $ {formatearPrecio(producto.price * producto.cantidad, true)}
                                </span>
                                <span className="precio-mobile">
                                    $ {formatearPrecio(producto.price * producto.cantidad, false)}
                                </span>
                            </span>
                            <button onClick={() => eliminarProducto(producto.id)}>x</button>
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
                    <button onClick={handlePago} className="boton-resumen ir-a-pagar">
                        Ir a pagar
                    </button>

                </div>

            </div>
            <Footer/>
        </div>
    );
}