import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from "./contexts/LoginContext";
import { useAdminContext } from './contexts/AdminContext';
import Nav from './Component/Nav';
import Home from './layouts/Home';
import ScrollToTop from './Component/ScrollToTop';
import FormularioProducto from './Component/FormularioProducto';



const ProductosContainer = lazy(() => import('./Component/ProductosConteiner'));
const Carrito = lazy(() => import('./Component/Carrito'));
const Pagos = lazy(() => import('./Component/Pagos'));
const Admin = lazy(() => import('./Component/Admin'));
const AboutUs = lazy(() => import('./Component/AboutUs'));
const Contacto = lazy(() => import('./Component/Contacto'));
const ProductoDetalle = lazy(() => import('./Component/ProductoDetalle'));
const Login = lazy(() => import('./Component/Login'));
const LoginAdmin = lazy(() => import('./Component/LoginAdmin'));
const RegistroUser = lazy(() => import('./Component/Registro'));

function App() {
  const { currentUser } = useAuthContext();
  const { admin } = useAdminContext();

  return (
    <div>
      <Nav />
      <ScrollToTop/>
      <Suspense fallback={<div style={{ textAlign: "center" }}>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<RegistroUser />} />
          <Route path="/productos" element={<ProductosContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pagos" element={currentUser ? <Pagos /> : <Navigate to="/login" replace />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/admin" element={admin ? <Admin /> : <Navigate to="/loginadmin" replace />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/formularioProducto" element={<FormularioProducto/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
