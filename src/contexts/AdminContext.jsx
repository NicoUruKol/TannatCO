import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth"
import { app } from "../auth/firebase";


const AdminContext = createContext();

export function useAdminContext() {
    return useContext(AdminContext);
}

export function AdminProvider({ children }) {
    const [admin, setAdmin] = useState(false);
    const [cerrarSesionUser, setCerrarSesionUser] = useState(null);

    

    const loginAdmin = async (usuario, password) => {
        if (usuario === "admin" && password === "1234") {
            const auth = getAuth(app);
            try {
                await signOut(auth);
                if (cerrarSesionUser) cerrarSesionUser();
            } catch (error) {
                console.error("Error cerrando sesión del user:", error);
            }

            localStorage.setItem("adminSession", "valid-admin-token");
            setAdmin(true);
            return true;
        }
        return false;
    };

    const logoutAdmin = () => {
        setAdmin(false);
        localStorage.removeItem("adminSession");
    };

    useEffect(() => {
        const token = localStorage.getItem("adminSession");
        if (token === "valid-admin-token") {
            setAdmin(true);
        }
    }, []);

    return (
        <AdminContext.Provider value={{
            admin, loginAdmin, logoutAdmin, setCerrarSesionUser
        }}>
            {children}
        </AdminContext.Provider>
    );
}
