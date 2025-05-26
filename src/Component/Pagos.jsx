import { formatearPrecio } from "./FomatoPrecio";
import '../styles/pagos.css'
import { dispararSweetConfirmar } from "../assets/sweetAlert";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContexts";

export default function Pagos({}) {
    const {productosCarrito} = useContext(CarritoContext)
    const subtotal = productosCarrito.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);

    return (
        <div className="pagos-resumen">
            <h3>Resumen</h3>
            <p className="subtotal">Subtotal: $ {formatearPrecio(subtotal)}</p>
            <p className="total">Total: $ {formatearPrecio(subtotal)}</p>

            <div className="botones-pagos">
                <button className="boton-pagos" onClick={() =>dispararSweetConfirmar(
                    "Gracias x su compra!!!",
                    "El pago se ha realizado con éxito!!!",
                    "success"
                    )
                }>
                    <img 
                        src ="https://http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/6.7.66/mercadopago/logo__large.png"
                        alt="Mercado Pago"
                        className="icono-pago"/>
                        Mercado Pago
                </button>

                <button className="boton-pagos" onClick={() =>dispararSweetConfirmar(
                    "Gracias x su compra!!!",
                    "El pago se ha realizado con éxito!!!",
                    "success"
                    )
                }>
                    <img 
                        src="https://w7.pngwing.com/pngs/992/823/png-transparent-visa-credit-card-gift-card-payment-cheque-mastercard-s-blue-text-service-thumbnail.png"
                        alt="visa"
                        className="icono-pago"/>
                        Visa
                </button>

                <button className="boton-pagos" onClick={() =>dispararSweetConfirmar(
                    "Gracias x su compra!!!",
                    "El pago se ha realizado con éxito!!!",
                    "success"
                    )
                }>
                    <img 
                        src="https://w7.pngwing.com/pngs/92/785/png-transparent-mastercard-logo-mastercard-credit-card-payment-visa-nyse-ma-mastercard-logo-text-logo-sign-thumbnail.png"
                        alt="master"
                        className="icono-pago"/>
                        Master Card
                </button>

                <button className="boton-pagos" onClick={() =>dispararSweetConfirmar(
                    "Gracias x su compra!!!",
                    "El pago se ha realizado con éxito!!!",
                    "success"
                    )
                }>
                    <img 
                        src="https://www.modo.com.ar/_next/image?url=%2Fstatic%2Fimages%2Fcms-rewrite%2F244835%2F436x96%2F54d30790a2%2Fmodo-logo-pay-default.png%2Fm%2F1200x0&w=1200&q=75"
                        alt="MODO"
                        className="icono-pago"/>
                        Modo
                </button>
            </div>
        </div>
    );
}
