import { Container, Carousel } from "react-bootstrap";
import "../../styles/resenasYContacto.css";

const RESEÑAS = [
    { titulo: "Impecable",          texto: "Excelente relación precio‑calidad, recomiendo",            autor: "Paula Rocío" },
    { titulo: "Excelente servicio", texto: "Rapidísima la entrega, llegó en tiempo y forma.",          autor: "Gael Tabare" },
    { titulo: "Muy bueno",          texto: "Muy buen portfolio de productos.",                         autor: "Nacho Dell" },
    { titulo: "Muy interesante",    texto: "Muy buen asesoramiento, quedé encantada.",                 autor: "Eloisa Torres" },
    { titulo: "Me encantó",         texto: "Muy buenas oportunidades para comprar con descuento.",     autor: "Patricia Fernández" },
    { titulo: "Útil",               texto: "El Somm Virtual me salvó una cena, ¡qué servicio!",        autor: "Marta Quintero" }
];

const chunk = (arr, n) =>
    arr.reduce((acc, _, i) => (i % n ? acc : [...acc, arr.slice(i, i + n)]), []);

export default function Contacto() {
    const slides = chunk(RESEÑAS, 2);

    return (
    <Container fluid className="px-0">
        <div className="contacto-container" id="contacto-form">
            <h3>CONTACTATE Y DEJANOS TU MENSAJE</h3>

            <div className="form-info-container">
            <div className="form-container">
                <form action="https://formspree.io/f/xzzbeojd" method="POST">
                <div className="form-group">
                    <label htmlFor="nombre">NOMBRE</label>
                    <input name="nombre" id="nombre" type="text" placeholder="Nombre y Apellido" required />
                </div>
                <div className="form-group">
                    <label htmlFor="mail">MAIL</label>
                    <input name="email" id="mail" type="email" placeholder="tucorreo@ejemplo.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">TELÉFONO</label>
                    <input name="telefono" id="telefono" type="tel" placeholder="Nº de Teléfono" />
                </div>
                <div className="form-group">
                    <label htmlFor="consulta">MENSAJE (opcional)</label>
                    <textarea name="message" rows="5" placeholder="Escribe tu mensaje aquí…" />
                </div>
                <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="info-container">
                <p className="info-mayorista">
                DISTRIBUCIÓN MAYORISTA: Tel: 779‑7922 — ventas@tannat&co.com.ar
                </p>

                <div className="info-contacto-redes">
                <div className="info-contacto">
                    <p><strong>Datos de Contacto</strong></p>
                    <p>1234‑4321</p>
                    <p>info@tannat&co.com.ar</p>
                    <p>Calle Falsa 123, CABA.</p>
                    <p>Lun‑Vie 10‑20 hs • Sáb 10‑18 hs</p>
                </div>

                <div className="info-redes">
                    <p><strong>Redes Sociales</strong></p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
                </div>

                <Carousel
                className="resenas-carousel"
                interval={4500}
                indicators={false}
                controls={slides.length > 1}
                pause="hover"
                >
                {slides.map((grupo, idx) => (
                    <Carousel.Item key={idx}>
                    <div className="slide-wrapper">
                        {grupo.map(({ titulo, texto, autor }) => (
                        <article className="reseña-perse" key={autor + titulo}>
                            <h4>{titulo}</h4>
                            <p>“{texto}”</p>
                            <cite>{autor}</cite>
                        </article>
                        ))}
                    </div>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>
            </div>
        </div>
        </Container>
    );
}
