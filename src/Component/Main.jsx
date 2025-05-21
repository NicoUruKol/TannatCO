import '../styles/Main.css';
import Banner from './Main/banner';
import BodegaMes from './Main/bodegaMes';
import Corte from './Main/corte';


function Main() {  
    return ( 
        <main>  
            <Corte/>
            <Banner/>
            <BodegaMes/>
            <Corte/>
        </main>  
    );  
}  
export default Main;  