import { useAdminContext } from '../contexts/AdminContext';
import { Link } from 'react-router-dom';
import '../styles/admin.css';
import { Container } from 'react-bootstrap';

export default function Admin() {
    const {logoutAdmin} = useAdminContext();
    
    return (
        <Container fluid className="px-0">
            <h2 className='admin-h2'>Panel de Admin</h2>
            <div className="admin-container">
                
                <p>
                    Bienvenido al panel de administración. Desde aquí podrás gestionar los productos y supervisar la actividad del sitio.
                    Este espacio está reservado exclusivamente para usuarios con permisos administrativos.
                </p>

                <h3>¿Qué podés hacer como administrador?</h3>
                <ul>
                    <li>
                        <Link to="/agregarProducto" className="adminLink">
                            ✅ Agregar nuevos productos al catálogo.
                        </Link>
                    </li>
                    <li>
                        <Link to="/editarProducto" className="adminLink">
                            ✅ Editar información de productos existentes.
                        </Link>
                    </li>
                    <li>
                        <Link to="/eliminarProducto" className='adminLink'>
                            ✅ Eliminar productos del sistema.
                        </Link>
                    </li>
                    <li>✅ Ver y gestionar los pedidos realizados.</li>
                    <li>✅ Acceder a información de usuarios registrados.</li>
                    <li>✅ Supervisar el stock disponible en tiempo real.</li>
                </ul>

                <button onClick={logoutAdmin}>
                    Cerrar sesión Admin
                </button>
            </div>
        </Container>
    );
}
