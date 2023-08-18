import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider ({children}){
    const [isAuthenticated, SetIsAuthenticated] = useState(false );
    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);