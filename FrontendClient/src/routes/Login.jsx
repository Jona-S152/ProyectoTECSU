
import '../index.css'
import {Link} from 'react-router-dom';
import {loginUser} from "../api/login.api.js";
import {useForm} from "react-hook-form";
import {useState} from "react";
import MenuMain from './Menu';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false)
    const {register, handleSubmit, formState: {
        errors
    }} = useForm();

    const onSubmit = handleSubmit( async (data) => {
        try {
            const res = await loginUser(data);
            if(res.success){
                setLoggedIn(true);
                console.log(res)
            } else{
                console.log("Credenciales incorrectas");
            }
        } catch (error) {
            console.error('Error' , error);
        }
    });
    return (
        <div >
            {loggedIn ? (
                <MenuMain/>
            ):(
                <form className={"Prueba"} method='POST' action='/login/' onSubmit={onSubmit}>
                    <h2>Iniciar sesión</h2>
                    <p>Ingresa tu nombre de usuario:</p>
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        // onChange={(e) => setUsername(e.target.value)}
                        {...register("userName", {required: true})}
                    />
                    {errors.userName && <span>This username is required</span>}
                    <p>Ingresa tu contraseña:</p>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        // onChange={(e) => setPassword(e.target.value)}
                        {...register("password", {required: true})}
                    />
                    {errors.password && <span>This password is required</span>}
                    <button>Iniciar sesión</button>
                    <span>¿No tienes una cuenta? <Link to="/SignUp" >Regístrate</Link></span>
                </form>
            )}
        </div>
    );
}

export default Login;
