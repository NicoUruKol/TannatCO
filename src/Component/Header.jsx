import { Container } from 'react-bootstrap';
import '../styles/header.css'

function Header() {
    return (  
        <Container fluid className="px-0">
            <header className="banner-principal">
                <p>Bienvenidos a</p>
                <h1><strong>Tannat & CO.</strong></h1>
                <p><strong>Alma Oriental</strong></p>
                <p><strong>Tu tienda de vinos</strong></p>
            </header>
        </Container>
    );  
}  

export default Header