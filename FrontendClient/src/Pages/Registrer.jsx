import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('URL_DE_LA_API/registro', {
                username,
                password,
            });
            // Manejar la respuesta de la API (éxito o error)
        } catch (error) {
            // Manejar el error
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Registrar</button>
        </div>
    );
}

export default Register;
