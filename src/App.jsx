  import './App.css'
  import { useState } from 'react'
  import Home from './layouts/Home'
  import { Routes, Route, Navigate } from 'react-router-dom';
  import { useAuthContext } from "./contexts/LoginContext";
  import Nav from './Component/Nav';
  import ProductosContainer from './Component/ProductosConteiner';
  import Carrito from './Component/Carrito';
  import AboutUs from './Component/AboutUs';
  import Contacto from './Component/Contacto';
  import ProductoDetalle from './Component/ProductoDetalle';
  import Admin from './Component/Admin';
  import Login from './Component/Login';
  import LoginAdmin from './Component/LoginAdmin';
  import Pagos from './Component/Pagos';
  import RegistroUser from './Component/Registro';
  
  function App() {
    const { currentUser } = useAuthContext();
    const [adminLogueado, setAdminLogueado] = useState(false)
  

function manejarAdmin() {
    setAdminLogueado(!adminLogueado)
  }

    return (

        <div>
          <Nav/>
          <Routes>
            <Route path='/aboutUs' element={<AboutUs/>}/>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login/>}/>
            <Route path="/registro" element={<RegistroUser />} />
            <Route path='/productos' element={<ProductosContainer/>} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/pagos" element={currentUser ? <Pagos /> : <Navigate to="/login" replace />} />
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/productos/:id' element={<ProductoDetalle/>}/>
            <Route path="/admin"   element={adminLogueado ? <Admin setLogueadoAdmin={manejarAdmin} admin={adminLogueado}/> 
            : <Navigate to="/loginadmin" replace/>}/>
            <Route path="/loginadmin" element={<LoginAdmin/>}/>
          </Routes>
        </div>

    )
  }

  export default App

