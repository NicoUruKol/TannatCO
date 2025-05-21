import Credit from '../../assets/credit-card-solid.svg'
import House from '../../assets/house-laptop-solid.svg'
import Truck from '../../assets/truck-solid.svg'

export default function Corte(){
    return(
        <section className="corte-info-card">
            <div className="corte-perse-1">
                <img src={House} alt=""/>
                <p><strong>hacemos envios</strong></p>
                <p>a todo el pais</p>
            </div>
            <div className="corte-perse">
                <img src={Credit} alt=""/>
                <p><strong>3 cuotas sin interes</strong></p>
                <p>con todas tus tarjetas</p>
            </div>
            <div className="corte-perse">
                <img src={Truck} alt=""/>
                <p><strong>envios gratis</strong></p>
                <p>a CABA desde $ 30.000</p>
            </div>
        </section>
    )
}