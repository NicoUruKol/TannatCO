import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Carousel, Modal } from "react-bootstrap";
import { CarritoContext } from "../../contexts/CarritoContexts";
import { ProductosContext } from "../../contexts/ProductosContext";

import ZorzalBrochure from '../../assets/Zorzal-brochoure.png';
import PresentacionZorzal from '../../assets/Presentacion_Zorzal_Distribuidor.png';
import FlyerTiza from '../../assets/FlyerTiza.png';
import FlyarGualta from '../../assets/FlyarGualta.jpeg';
import FlyerPorfiado from '../../assets/Flyerporfiado.jpg';



export default function BodegaMes() {
    const [showModal, setShowModal] = useState(false);
    const [srcModal, setSrcModal] = useState("");
    const [isCarousel, setIsCarousel] = useState(() => window.innerWidth < 992);
    const navigate = useNavigate();

    const { productos } = useContext(ProductosContext);
    const { agregarAlCarrito } = useContext(CarritoContext);

    useEffect(() => {
        const onResize = () => setIsCarousel(window.innerWidth < 992);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const abrirModal = (src) => {
        setSrcModal(src);
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
        setSrcModal("");
    };

    const handleAgregarGualtaPack = () => {
    const ids = [7, 8, 10, 33];
    const productosSeleccionados = ids
        .map(id => productos.find(p => Number(p.id) === Number(id)))
        .filter(Boolean)
        .map(p => ({ ...p, cantidad: 1 }));

    agregarAlCarrito(productosSeleccionados);
    navigate("/carrito");
};


    const flyers = [
        {
            id: "zorzal",
            img: PresentacionZorzal,
            alt: "Bodega Zorzal",
            onClick: () => abrirModal(ZorzalBrochure),
        },
        {
            id: "tiza",
            img: FlyerTiza,
            alt: "Flyer Tiza",
            onClick: () => navigate("/detalle/9"),
        },
        {
            id: "gualta",
            img: FlyarGualta,
            alt: "Flyer Gualta",
            onClick: handleAgregarGualtaPack,
        },
        {
            id: "porfiado",
            img: FlyerPorfiado,
            alt: "Flyer Porfiado",
            onClick: () => navigate("/detalle/7"),
        }
    ];

    const FlyerCard = ({ flyer }) => (
        <div className="flyer-wrapper">
            <button className="boton-sin-estilo" onClick={flyer.onClick}>
                <img src={flyer.img} alt={flyer.alt} className="flyer-img" />
            </button>
        </div>
    );

    return (
        <Container fluid className="px-0">
            <section className="destacados" id="bodega-mes">
                <h2>BODEGA DEL MES</h2>
                {!isCarousel ? (
                    <div className="destacados-lista-container">
                        {flyers.map(flyer => (
                            <div className="destacados-lista" key={flyer.id}>
                                <FlyerCard flyer={flyer} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Carousel
                        interval={5000}
                        indicators={false}
                        controls={flyers.length > 1}
                        className="destacados-carousel"
                    >
                        {flyers.map(flyer => (
                            <Carousel.Item key={flyer.id}>
                                <FlyerCard flyer={flyer} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}
            </section>

            <Modal show={showModal} onHide={cerrarModal} centered size="lg">
                <Modal.Body className="p-0">
                    {srcModal && <img src={srcModal} alt="Ampliada" className="w-100" />}
                </Modal.Body>
            </Modal>
        </Container>
    );
}
