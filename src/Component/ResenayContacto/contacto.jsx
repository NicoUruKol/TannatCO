import "../../styles/resenasYContacto.css"

export default function Contacto(){
    return (
        <div className="contacto-container" id="contacto-form">
            <h3>CONTACTATE Y DEJANOS TU MENSAJE</h3>
            <div className="form-info-container">
                <div className="form-container">
                    <form action="https://formspree.io/f/xzzbeojd" method="POST">
                        <div className="form-group">
                            <label htmlFor="nombre">NOMBRE</label>
                            <input name="nombre" id="nombre" type="text" placeholder="Nombre y Apellido" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mail">MAIL</label>
                            <input name="email" id="mail" type="email" placeholder="tucorreo@ejemplo.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">TELEFONO</label>
                            <input name="telefono" id="telefono" type="number" placeholder="Nº de Telefono" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="consulta">MENSAJE "opcional"</label>
                            <textarea name="message" rows="6" placeholder="Escribe tu mensaje aquí..."></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className="info-container">
                    <p className="info-mayorista">
                        DISTRIBUCIÓN MAYORISTA: Tel: 779-7922 ventas@tannat&co.com.ar
                    </p>
                    <div className="info-contacto-redes">
                        <div className="info-contacto">
                            <p><strong>Datos de Contacto</strong></p>
                            <p>1234-4321</p>
                            <p>info@tannat&co.com.ar</p>
                            <p>Calle Falsa 123, CABA.</p>
                            <p>LUN a VIE 10 a 20hs y SAB 10 a 18hs</p>
                        </div>
                        <div className="info-redes">
                            <p><strong>Redes Sociales</strong></p>
                            <p>Instagram</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};