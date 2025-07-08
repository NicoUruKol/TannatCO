import Enologo from '../../assets/ennologo tannat.jpg'
import Tractor from '../../assets/tractor-tannat.jpg'
import { Container } from "react-bootstrap";

export default function Uruguay6(){
    return(
        <Container fluid className="px-0">
            <section className="nosotros-6">
                <div>
                    <img src={Enologo} alt=""/>
                </div>
                <div>
                    <img src={Tractor} alt=""/>
                </div>
            </section>
        </Container>       
    )
}