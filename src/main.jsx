import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { CarritoProvider } from './contexts/CarritoContexts'
import { AuthProvider } from './contexts/LoginContext'
import { AdminProvider } from './contexts/AdminContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.PROD ? "/TannatCO" : "/"}>
      <AuthProvider>
        <AdminProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </AdminProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)

