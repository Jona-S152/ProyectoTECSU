import React, { useState } from 'react';
import '../index.css'
import {useAuth} from "../Authentication/AuthProvider.jsx";
import {Navigate} from "react-router-dom";
import axios from "axios";

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
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 username,
    //                 password,
    //             }),
    //         });
    //         // Manejar la respuesta de la API (éxito o error)
    //         if (response.status === 200) {
    //             auth.login(response.data.token);
    //         } else {
    //             // Manejar el error
    //         }
    //     } catch (error) {
    //         // Manejar el erro
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
