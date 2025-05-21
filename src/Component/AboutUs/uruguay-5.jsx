import Cosechardor from '../../assets/cocechador-600x400 tannat.jpg'
import Medalla from '../../assets/tannat-medalla-600x400 tannat.jpg'
import Bodegas from '../../assets/las-bodegas-600x400 tannat.jpg'

export default function Uruguay5(){
    return(
        <section className="nosotros-4">
            <div className="cont-img-triptico-nosotros">
                <img src={Cosechardor} alt="" className="img-triptico-nosotros"/>
            </div>
            <div className="cont-p-triptico-nosotros">
                <p>
                    Aproximadamente un tercio de la superficie de viñedos de Uruguay es de Tannat, por eso es el único productor en el mundo donde se cultiva una cantidad mayor que en su tierra de origen: Madiran, en el suroeste de Francia. El Tannat posee gran estructura, cuerpo y color. Es un vino potente, ideal para acompañar carnes, especialmente asadas.
                </p>
            </div>
            <div className="cont-img-triptico-nosotros">
                <img src={Medalla} alt="" className="img-triptico-nosotros"/>
            </div>
            <div className="cont-p-triptico-nosotros">
                <p>
                    El vino Tannat, consumido moderadamente, es beneficioso para la salud. Es la variedad que contiene los niveles más altos de polifenoles que aportan Resveratrol, de efecto antioxidante que reduce el colesterol LDL, y Procianidinas oligoméricas, potentes protectores cardiovasculares por su efecto vasodilatador y que incrementan la oxigenación de los glóbulos rojos.
                </p>
            </div>
            <div className="cont-img-triptico-nosotros">
                <img src={Bodegas} alt="" className="img-triptico-nosotros"/>
            </div>
            <div className="cont-p-triptico-nosotros">
                <p>
                    Las bodegas uruguayas elaboran vinos Tannat tranquilos con o sin crianza en barricas de roble. Su complejidad y sólida estructura permite la elaboración de cortes con otras variedades, entre ellas Cabernet Sauvignon, Merlot, Cabernet Franc, Syrah, Malbec, Petit Verdot, e incluso Viognier. A partir de Tannat también se elaboran espumosos, licorosos y aperitivos.
                </p>
            </div>
        </section>
    )
}