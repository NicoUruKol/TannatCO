import '../styles/Main.css';
import Banner from './Main/banner';
import BodegaMes from './Main/bodegaMes';
import Corte from './Main/corte';
import { Helmet } from 'react-helmet';

function Main() {  
    return ( 
        <main>
            <Helmet>
                <title>Inicio | Tannat & Co</title>
                <meta name="description" content="Bienvenido a Tannat & CO" />
            </Helmet>  
            <Corte/>
            <Banner/>
            <BodegaMes/>
            <Corte/>
        </main>  
    );  
}  
export default Main;  