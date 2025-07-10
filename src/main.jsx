import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './contexts/CarritoContexts'
import { AuthProvider } from './contexts/LoginContext'
import { AdminProvider } from './contexts/AdminContext'
import { ProductosProvider } from './contexts/ProductosContext'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename={import.meta.env.PROD ? "/TannatCO" : "/"}>
    <AuthProvider>        
      <AdminProvider>     
        <CarritoProvider>
          <ProductosProvider>
            <App />
          </ProductosProvider>
        </CarritoProvider>
      </AdminProvider>
    </AuthProvider>
  </BrowserRouter>
</React.StrictMode>
)

