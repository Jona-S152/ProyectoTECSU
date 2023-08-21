import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userId, setUserId] = useState(() => {
        const storedUserId =  localStorage.getItem('userId');
        return storedUserId ? JSON.parse(storedUserId) : null;
    });
    

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}
