import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { loginUser } from "../api/login.api";
import '../index.css'
import Registrer from './Registrer'

export function Sesion() {

    const [loggedIn, setLoggedIn] = useState(false);

    const {register, handleSubmit, formState: {
        errors
    }} = useForm()

    const onSubmit = handleSubmit( async (data) => {
        try {
            const res = await loginUser(data);
            if (res.success){
                setLoggedIn(true);
                console.log(res);
            }
            else{
                console.log('Credenciales inválidas');
            }
            
        } catch (error) {
            console.error('Error' , error);
        }
    });

    return (
        <div className={"Prueba"}>
            {loggedIn ? (
                <Registrer />
            ) : (
                <form method='POST' action='/login/' onSubmit={onSubmit}>
                        <h2>Iniciar sesión</h2>
                        <p>Ingresa tu nombre de usuario:</p>
                        <input
                            type="text"
                            placeholder="Username"
                            /*value={username}
                            onChange={(e) => setUsername(e.target.value)}*/
                            {...register("userName", {required: true})}
                        />
                        {errors.userName && <span>This username is required</span>}

                        <p>Ingresa tu contraseña:</p>
                        <input
                            type="password"
                            placeholder="Password"
                            /*value={password}
                            onChange={(e) => setPassword(e.target.value)}*/
                            {...register("password", {required: true})}
                        />
                        {errors.password && <span>This password is required</span>}

                        <button /*onClick={handleLogin}*/>Iniciar sesión</button>
                    
                </form>
            )}
        </div>
    );
}

export default Sesion;
