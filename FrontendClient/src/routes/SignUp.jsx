import React, { useState } from 'react';
import '../index.css'
import {useAuth} from "../auth/AuthProvider.jsx";
import {Navigate} from "react-router-dom";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return <Navigate to="/Menu" />;
    }
    // const handleRegister = async () => {
    //     try {
    //         const response = await axios.post('URL_DE_LA_API/registro', {
    //             username,
    //             password,
    //         });
    //         // Manejar la respuesta de la API (éxito o error)
    //     } catch (error) {
    //         // Manejar el error
    //     }
    // };

    return (
        <div className={"Prueba"}>
            <h2>Registro</h2>
            <p>Crea tu usuario:</p>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <p>Crea tu contraseña:</p>
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button>Registrar</button>
        </div>
    );
}

export default Register;
