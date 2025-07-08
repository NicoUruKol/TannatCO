import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ZorzalBrochure from '../../assets/Zorzal-brochoure.png';
import PresentacionZorzal from '../../assets/Presentacion_Zorzal_Distribuidor.png';
import FlyerTiza from '../../assets/FlyerTiza.png';
import FlyarGualta from '../../assets/FlyarGualta.jpeg';
import FlyerPorfiado from '../../assets/Flyerporfiado.jpg';
import { Container, Carousel, Modal } from "react-bootstrap";



export default function BodegaMes() {
    const [showModal, setShowModal]     = useState(false);
    const [srcModal, setSrcModal]       = useState("");
    const [isCarousel, setIsCarousel] = useState(
        () => window.innerWidth < 992    
    );

    useEffect(() => {
        const onResize = () => setIsCarousel(window.innerWidth < 992);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const abrirModal  = src => { setSrcModal(src); setShowModal(true); };
    const cerrarModal = ()  => { setShowModal(false); setSrcModal(""); };

    const flyers = [
        {
        id: "zorzal",
        img: PresentacionZorzal,
        alt: "Bodega Zorzal",
        onClick: () => abrirModal(ZorzalBrochure),
        isLink: false,
        },
        {
        id: "tiza",
        img: FlyerTiza,
        alt: "Flyer Tiza",
        to : "/productos",
        isLink: true,
        },
        {
        id: "gualta",
        img: FlyarGualta,
        alt: "Flyer Gualta",
        to : "/productos",
        isLink: true,
        },
        {
        id: "porfiado",
        img: FlyerPorfiado,
        alt: "Flyer Porfiado",
        to : "/productos",
        isLink: true,
        },
    ];

    const FlyerCard = ({ flyer }) => {
    const content = flyer.isLink ? (
        <Link to={flyer.to}>
        <img src={flyer.img} alt={flyer.alt} className="flyer-img" />
        </Link>
    ) : (
        <button className="boton-sin-estilo" onClick={flyer.onClick}>
        <img src={flyer.img} alt={flyer.alt} className="flyer-img" />
        </button>
    );

    return <div className="flyer-wrapper">{content}</div>;
};
    return (
        <Container fluid className="px-0">
            <section className="destacados" id="bodega-mes">
                <h2>BODEGA DEL MES</h2>
                {!isCarousel && (
                    <div className="destacados-lista-container">
                        {flyers.map(flyer => (
                        <div className="destacados-lista" key={flyer.id}>
                            <FlyerCard flyer={flyer} />
                        </div>
                        ))}
                    </div>
                )}

                {isCarousel && (
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
                    <img src={srcModal} alt="Ampliada" className="w-100" />
                </Modal.Body>
            </Modal>
        </Container>
    );
}