import Resenas from "./ResenayContacto/resenas";
import Contacto from "./ResenayContacto/contacto";
import Corte from "./Main/corte";
import Footer from "../Component/Footer";
import "../styles/resenasYContacto.css"
import Header from "./Header";

export default function ResenasYContacto(){
    return (
        <div>
            <div className="resenas-contacto-wrapper">
                <Header/>
                <h2>RESEÑAS Y CONTACTO</h2>
                <Contacto />
                <Resenas />
                <Corte/>
                <Footer/>
            </div>
        </div>
    );
};