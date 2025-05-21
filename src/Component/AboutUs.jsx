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


export default function AboutUs() {
    return(
        <main>
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
        </main>
        
    );
}