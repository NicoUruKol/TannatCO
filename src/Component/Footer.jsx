import "../styles/footer.css"
import instagram from '../assets/instagram.svg'
import whatsapp from '../assets/whatsapp.svg'
import facebook from '../assets/facebook.svg'
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";

export default function Footer(){
    return (
        <Container fluid className="px-0">
            <footer> 
                <div className="footer-columna form">
                    <h4>NEWSLETTER</h4>
                    <form action="https://formspree.io/f/xzzbeojd" method="POST">
                        <input name="nombre" id="nombre" type="text" placeholder="Nombre y Apellido"/>
                        <input name="mail" id="mail" type="email" placeholder="tucorreo@ejemplo.com"/>
                        <button className= "footer-form-button" type="submit">Enviar</button>
                    </form>
                </div>
            
                <div className="footer-columna redes">
                    <h4>REDES SOCIALES</h4>
                    <div className="social-icons">
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                        <a href="#"><img src={whatsapp} alt="WhatsApp"/></a>
                        <a href="#"><img src={facebook} alt="Facebook"/></a>
                    </div>
                </div>
            
                <div className="footer-columna contacto">
                    <h4>CONTACTANOS</h4>
                    <div className="contact-info">
                        <hr/>
                        <p>1234-4321  |  info@tannat&co.com.ar</p>
                        <hr/>
                        <p>Calle Falsa 123· CABA.</p>
                        <p>LUN a VIE 10 a 20hs y SAB 10 a 18hs</p>

                    </div>
                </div>
            
                <section className="footer-columna footer-section">
                    <a href="#contacto-form" className="corte-info">Contacto</a>
                    <Link to="/aboutUs" className="corte-info">
                        Quienes Somos
                    </Link>
                    <a href="#" className="corte-info">Preguntas Frecuentes</a>
                    <a href="#" className="corte-info">Políticas de Reembolso</a>
                </section>
            </footer>
        </Container>    
    )
}
