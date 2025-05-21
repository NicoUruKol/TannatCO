import '../styles/admin.css';

export default function Admin({ setLogueadoAdmin }) {
    return (
        <div className="admin-container">
            <h2>Panel de Administración</h2>
            <p>
                Bienvenido al panel de administración. Desde aquí podrás gestionar los productos y supervisar la actividad del sitio.
                Este espacio está reservado exclusivamente para usuarios con permisos administrativos.
            </p>

            <h3>¿Qué podés hacer como administrador?</h3>
            <ul>
                <li>✅ Agregar nuevos productos al catálogo.</li>
                <li>✅ Editar información de productos existentes.</li>
                <li>✅ Eliminar productos del sistema.</li>
                <li>✅ Ver y gestionar los pedidos realizados.</li>
                <li>✅ Acceder a información de usuarios registrados.</li>
                <li>✅ Supervisar el stock disponible en tiempo real.</li>
            </ul>

            <button onClick={setLogueadoAdmin}>
                Cerrar sesión Admin
            </button>
        </div>
    );
}
