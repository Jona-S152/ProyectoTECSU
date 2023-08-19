import { useContext, createContext, useState, useEffect } from "react";
//Valida si existe autenticacion o no para acceder a la ruta que esta protegida
const AuthContext = createContext({
        isAuthenticated: false,
});

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={[isAuthenticated]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);