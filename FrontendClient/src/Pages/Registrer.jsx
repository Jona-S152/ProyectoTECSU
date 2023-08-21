import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

function Register() {

    return (
        <div>
            <h2>Registro</h2>
            <input
                type="text"
                placeholder="Nombre de usuario"
            />
            <input
                type="password"
                placeholder="Contraseña"
            />
            <button onClick={handleRegister}>Registrar</button>
        </div>
    );
}

export default Register;
