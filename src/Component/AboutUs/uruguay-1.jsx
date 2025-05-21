import Logo from '../../assets/logo_photoshop.png'

export default function Uruguay1(){
    return(
        <section className="nosotros-1">
            <h2>Uruguay - Tannat</h2>
            <div className="logo-contenedor-nosotros">
                <div className="logo-nosotros">
                    <img src={Logo} alt="TANNAT&CO" className="logo-img-nosotros"/>
                </div>
                <div className="titular-nosotros">
                    <p>Uruguay - Tannat</p>
                </div>
            </div>

            <div className="nosotros-perse">
                <p>La tannat es una uva tinta que ha crecido históricamente en el suroeste de Francia. En la actualidad es una de las uvas más importantes de Uruguay, donde se considera la “uva nacional”.
                <br/>
                Los vinos de tannat producidos en Uruguay son muy diferentes en sus características de los vinos de la Apellation d’Origine Controlée (AOC) Madiran, por tener un cuerpo más ligero y menos taninos.</p>
            </div>
        </section>
    )
}