import { useState } from 'react'
import './App.css'
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
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



function App() {
  const [productosCarrito, setProductosCarrito] = useState([])
  const [usuarioLogueado, setUsuarioLogueado] = useState(false)
  const [adminLogueado, setAdminLogueado] = useState(false)
  
  
  function funcionCarrito(producto){
      const existe = productosCarrito.find(p => p.id === producto.id);
      if (existe){
          const carritoActualizado = productosCarrito.map((p) =>{
              if (p.id === producto.id){
                  const productoActualizado = {...p, cantidad: p.cantidad + producto.cantidad}
                  return productoActualizado
              }else{
                  return p
              }
          })

          setProductosCarrito(carritoActualizado)
      }else{

      const nuevoCarrito = [...productosCarrito, producto]
      setProductosCarrito(nuevoCarrito)
  }}

  function eliminarProducto(id) {
    const nuevoCarrito = productosCarrito.filter((p) => p.id !== id);
    setProductosCarrito(nuevoCarrito);
}

function vaciarCarrito() {
    setProductosCarrito([]);
}

function manejarAdmin() {
    setAdminLogueado(!adminLogueado)
  }

function manejarUser(){
    setUsuarioLogueado(!usuarioLogueado)
  }

  return (
    <BrowserRouter basename="/TannatCO">
      <div>
        <Nav productosCarrito={productosCarrito}/>
        <Routes>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login user={usuarioLogueado} setLogueadoUser={manejarUser}/>}/>
          <Route path='/productos' element={<ProductosContainer funcionCarrito={funcionCarrito} />} />
          <Route path="/carrito" element={<Carrito 
            productos={productosCarrito} 
            eliminarProducto={eliminarProducto} 
            vaciarCarrito={vaciarCarrito}/>} />
          <Route path="/pagos" element={usuarioLogueado ? <Pagos productos={productosCarrito} /> : <Navigate to="/login" replace />}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos/:id' element={<ProductoDetalle funcionCarrito={funcionCarrito}/>}/>
          <Route path="/admin"   element={adminLogueado ? <Admin setLogueadoAdmin={manejarAdmin} admin={adminLogueado}/> 
            : <Navigate to="/loginadmin" replace/>}/>
          <Route path="/loginadmin" element={<LoginAdmin setLogueadoAdmin={manejarAdmin} admin={adminLogueado} />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

