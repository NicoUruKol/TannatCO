import Resenas from "./ResenayContacto/resenas";
import Contacto from "./ResenayContacto/contacto";
import Corte from "./Main/corte";
import Footer from "../Component/Footer";
import "../styles/resenasYContacto.css"
import Header from "./Header";
import { Helmet } from 'react-helmet';
import { Container } from "react-bootstrap";

export default function ResenasYContacto(){
    return (
        <Container fluid className="px-0">
            <Helmet>
                <title>Contacto | Tannat & Co</title>
                <meta name="description" content="Ponte en contacto con nosotros" />
            </Helmet>
            <div className="resenas-contacto-wrapper">
                <Header/>
                <h2>RESEÑAS Y CONTACTO</h2>
                <Contacto />
                <Resenas />
                <Corte/>
                <Footer/>
            </div>
        </Container>
    );
};