/*import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

function Sesion() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const MensajeError = document.getElementById("MensajeError");
        try {
            const response = await axios.post('URL_DE_LA_API/sesion', {
                username,
                password,
            });
            // Manejar la respuesta de la API (éxito o error)
        } catch (error) {
            // Mensaje del error
        }
    };

    return (
        <div className={"Prueba"}>
            <h2>Iniciar sesión</h2>
            <p>Ingresa tu nombre de usuario:</p>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <p>Ingresa tu contraseña:</p>
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Iniciar sesión</button>
            <span>¿No tienes una cuenta? <a href="/FrontendClient/src/Pages/Registrer.jsx">Regístrate</a></span>
        </div>
    );
}

export default Sesion;
*/