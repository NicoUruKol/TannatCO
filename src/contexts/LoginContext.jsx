import { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAdminContext } from './AdminContext';
import { app } from '../auth/firebase';

const LoginContext = createContext();

export function useAuthContext() {
    return useContext(LoginContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    const adminCtx = useAdminContext();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    useEffect(() => {
        if (adminCtx?.setCerrarSesionUser) {
            adminCtx.setCerrarSesionUser(() => {
                setCurrentUser(null);
            });
        }
    }, [adminCtx]);

    const login = (email, password) => {
        adminCtx?.logoutAdmin?.();
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        return signOut(auth);
    };

    const value = {
        currentUser,
        login,
        logout,
    };

    return (
        <LoginContext.Provider value={value}>
            {!loading && children}
        </LoginContext.Provider>
    );
}
