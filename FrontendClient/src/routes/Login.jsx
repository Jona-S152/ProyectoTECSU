import { useState } from 'react';
import '../index.css'
import {Link} from 'react-router-dom';
import {useAuth} from "../Authentication/AuthProvider";
import {Navigate} from "react-router-dom";
//import axios from "axios";


function Login() {
    /*VALIDACION DEL USUARIO / */
    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post('URL_DE_LA_API/sesion', {
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
    //         if (response.status === 200){
    //             console.log("Iniciaste sesión");
    //         } else{
    //             console.log("Usuario o contraseña incorrecta");
    //         }
    //         // if (response.status === 200) {
    //         //     Authentication.login();
    //         // } else {
    //         //     MensajeError.innerHTML = "Usuario o contraseña incorrecta";
    //         // }
    //     } catch (error) {
    //         // Mensaje del error
    //         console.log("Usuario o contraseña incorrecta");
    //     }
    // };
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();
    if (auth.isAuthenticated) {
        return <Navigate to="/Menu" />;
    }

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
            <button>Iniciar sesión</button>
            <span>¿No tienes una cuenta? <Link to="/SignUp" >Regístrate</Link></span>
        </div>
    );
}

export default Login;
