import "../styles/productos.css"
import { Link } from 'react-router-dom';
import { formatearPrecio } from "./FomatoPrecio";


export default function Card({producto}){
    
    return(    
    <div className="productos-card">
        <img className="productos-image" src={producto.avatar}/>
        <h3>{producto.name}</h3>
        <h3 className="productos-precio">$ {formatearPrecio(producto.price)}</h3>
        <Link to={"/productos/" + producto.id}> 
            <button className="productos-boton">+ Info</button>
        </Link>
    </div>
    );
}
