import { useState } from "react";
import { Link } from 'react-router-dom';
import ZorzalBrochure from '../../assets/Zorzal-brochoure.png';
import PresentacionZorzal from '../../assets/Presentacion_Zorzal_Distribuidor.png';
import FlyerTiza from '../../assets/FlyerTiza.png';
import FlyarGualta from '../../assets/FlyarGualta.jpeg';
import FlyerPorfiado from '../../assets/Flyerporfiado.jpg';
import { Container } from "react-bootstrap";



export default function BodegaMes(){
    const [modalAbierto, setModalAbierto] = useState(false);
    const [imagenModal, setImagenModal] = useState("");

    const abrirModal = (src) => {
        setImagenModal(src);
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
        setImagenModal("");
    };

    return(
        <Container fluid className="px-0">
            <section className="destacados" id="bodega-mes">
                <h2>BODEGA DEL MES</h2>
                <div className="destacados-lista-container">
                <div className="destacados-lista">
                    <button onClick={() => abrirModal(ZorzalBrochure)} className="boton-sin-estilo">
                    <img 
                        src={PresentacionZorzal} 
                        className="imagen-hover" 
                        alt="Bodega Zorzal" 
                    />
                    </button>
                </div>
                <div className="destacados-lista">
                    <Link to="/productos">
                    <img src={FlyerTiza} alt="Flyer Tiza"/>
                    </Link>
                </div>
                <div className="destacados-lista">
                    <Link to="/productos">
                    <img src={FlyarGualta} alt="Flyer Gualta"/>
                    </Link>
                </div>
                <div className="destacados-lista">
                    <Link to="/productos">
                    <img src={FlyerPorfiado} alt="Flyer Porfiado"/>
                    </Link>
                </div>
                </div>
            </section>

            {modalAbierto && (
                <div className="modal" onClick={cerrarModal}>
                <span className="cerrar" onClick={cerrarModal}>&times;</span>
                <img 
                    className="modal-contenido" 
                    src={imagenModal} 
                    alt="Ampliada"
                    onClick={(e) => e.stopPropagation()}
                />
                </div>
            )}
        </Container>
    );
    }