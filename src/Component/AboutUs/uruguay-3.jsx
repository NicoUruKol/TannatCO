import EsquemaAltitud from '../../assets/ESQUEMA-DE-ALTITUD-3.fw_-1536x716.png'

export default function Uruguay3(){
    return(
        <section>
            <div className="contenedor-titulo">
                <div className="titular-nosotros">
                    <p>Esquema de Altitud</p>
                </div>
            </div>
            <div className="contenedor-img-altura">
                <img src={EsquemaAltitud} alt="" className="img-altura-nosotros"/>
            </div>
        </section>
    )
}