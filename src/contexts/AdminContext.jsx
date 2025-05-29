import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export function useAdminContext() {
    return useContext(AdminContext);
}

export function AdminProvider({ children }) {
    const [admin, setAdmin] = useState(false);

    const loginAdmin = (usuario, password) => {
        if (usuario === "admin" && password === "1234") {
            setAdmin(true);
            return true;
        } else {
            return false;
        }
    };

    const logoutAdmin = () => {
        setAdmin(false);
    };

    const value = {
        admin,
        loginAdmin,
        logoutAdmin,
    };

    return (
        <AdminContext.Provider value={{ admin, loginAdmin, logoutAdmin }}>
            {children}
        </AdminContext.Provider>
    );
}