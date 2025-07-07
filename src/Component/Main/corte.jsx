import { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import Credit from "../../assets/credit-card-solid.svg";
import House from "../../assets/house-laptop-solid.svg";
import Truck from "../../assets/truck-solid.svg";

export default function Corte() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid className="px-0">
            <section className="corte-info-card d-none d-md-flex">
                <div className="corte-perse-1">
                <img src={House} alt="envíos a todo el país" />
                <p>
                    <strong>hacemos envíos</strong>
                </p>
                <p>a todo el país</p>
                </div>
                <div className="corte-perse">
                <img src={Credit} alt="3 cuotas sin interés" />
                <p>
                    <strong>3 cuotas sin interés</strong>
                </p>
                <p>con todas tus tarjetas</p>
                </div>
                <div className="corte-perse">
                <img src={Truck} alt="envíos gratis en AMBA" />
                <p>
                    <strong>envíos gratis</strong>
                </p>
                <p>en AMBA desde $40.000</p>
                </div>
            </section>

            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                indicators={false}
                controls={true}
                interval={5000}
                className="corte-carousel d-md-none"
            >
                <Carousel.Item>
                <div className="corte-perse corte-perse-mobile text-center py-4 d-flex flex-column align-items-center justify-content-center">
                    <img src={House} alt="envíos a todo el país" />
                    <p className="mt-2 mb-0">
                    <strong>hacemos envíos</strong>
                    </p>
                    <p>a todo el país</p>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="corte-perse corte-perse-mobile text-center py-4 d-flex flex-column align-items-center justify-content-center">
                    <img src={Credit} alt="3 cuotas sin interés" />
                    <p className="mt-2 mb-0">
                    <strong>3 cuotas sin interés</strong>
                    </p>
                    <p>con todas tus tarjetas</p>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="corte-perse corte-perse-mobile text-center py-4 d-flex flex-column align-items-center justify-content-center">
                    <img src={Truck} alt="envíos gratis en AMBA" />
                    <p className="mt-2 mb-0">
                    <strong>envíos gratis</strong>
                    </p>
                    <p>en AMBA desde $40.000</p>
                </div>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}
