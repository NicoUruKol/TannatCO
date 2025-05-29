import "../../styles/resenasYContacto.css"

export default function Resenas(){
    return (
        <section className="reseña-contacto">
            <div className="reseña-container">
                <div className="reseña-perse-1">
                    <p className="parrafo-reseñas">
                        <h3>Nuestros clientes nos comparten su experiencia</h3>
                    </p>
                </div>
                {[
                { titulo: "Impecable", texto: "Excelente relación precio-calidad, recomiendo", autor: "Paula Rocío" },
                { titulo: "Excelente servicio", texto: "Rapidísima la entrega, llegó en tiempo y forma, volveré a comprar", autor: "Gael Tabare" },
                { titulo: "Muy bueno", texto: "Muy buen portfolio de productos", autor: "Nacho Dell" },
                { titulo: "Muy interesante", texto: "Muy buen asesoramiento, quedé encantada", autor: "Eloisa Torres" },
                { titulo: "Me encantó", texto: "Muy buenas oportunidades para comprar con descuento", autor: "Patricia Fernandez" },
                { titulo: "Me encantó", texto: "El Somm Virtual me salvó una cena, qué bien asesora", autor: "Marta Quintero" }
                ].map((reseña, index) => (
                <div className="reseña-perse" key={index}>
                    <h4>{reseña.titulo}</h4>
                    <p>"{reseña.texto}"</p>
                    <cite>{reseña.autor}</cite>
                </div>
                ))}
            </div>
        </section>
    );
};

