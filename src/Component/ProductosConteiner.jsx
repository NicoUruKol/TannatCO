import { useState, useEffect } from "react";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";
import Footer from "./Footer";
import { Helmet } from "react-helmet";


export default function ProductosContainer() {
    const [productos, setProductos] = useState([]);
    const { admin, logoutAdmin } = useAdminContext();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://68100d9127f2fdac24101f8a.mockapi.io/productos')
        .then(res => res.json())
        .then(data => setProductos(data))
        .catch(err => console.error(err));
    }, []);

    const handleLogout = () => {
        logoutAdmin();
        navigate("/");
    }         

    return (
        <div>
            <Helmet>
                <meta name="description" content="Explora nuestra variedad de productos." />
            </Helmet>
            <h2>PRODUCTOS</h2>
            {admin && (
                <div>
                    <Link to="/admin" > 
                        <button className="productos-boton-admin">Volver a menú Admin</button>
                    </Link>
                    <button onClick={handleLogout} className="productos-boton-admin">Salir de Admin</button>
                </div>
            )}
            <div className="productos-container">
                {productos.map(producto => (
                <Card key={producto.id} producto={producto} />
            ))}
            </div>
            <Footer/>   
        </div>
    );
}
