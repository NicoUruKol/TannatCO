import Header from "./Header";
import Corte from "./Main/corte";
import "../styles/aboutus.css"
import Nosotros from "./AboutUs/nosotros";
import Uruguay1 from "./AboutUs/uruguay-1";
import Uruguay2 from "./AboutUs/uruguay-2";
import Uruguay3 from "./AboutUs/uruguay-3";
import Uruguay4 from "./AboutUs/uruguay-4";
import Uruguay5 from "./AboutUs/uruguay-5";
import Uruguay6 from "./AboutUs/uruguay-6";
import Footer from "./Footer";
import { Helmet } from 'react-helmet';
import { Container } from "react-bootstrap";


export default function AboutUs() {
    return(
        <Container fluid className="px-0">
            <Helmet>
                <title>Nosotros | Tannat & Co</title>
                <meta name="description" content="Quienes somos" />
            </Helmet>
            <Header/>
            <Nosotros/>
            <Uruguay1/>
            <Uruguay2/>
            <Uruguay3/>
            <Uruguay4/>
            <Uruguay5/>
            <Uruguay6/>
            <Corte/>
            <Footer/>
        </Container>
        
    );
}