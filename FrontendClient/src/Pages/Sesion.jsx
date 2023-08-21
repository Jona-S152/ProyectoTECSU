import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { loginUser } from "../api/login.api";
import '../index.css'
import { Navigate } from "react-router-dom";

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
        <div className='body'>
            {loggedIn ? (
                <Navigate to = "/menu" />
            ) : (
                <form className={"Prueba"} method='POST' action='/login/' onSubmit={onSubmit}>
                        <h2>Iniciar sesión</h2>
                        <p>Ingresa tu nombre de usuario:</p>
                        <div className='InputCnt'>
                            <input
                                type="text"
                                placeholder="Username"
                                /*value={username}
                                onChange={(e) => setUsername(e.target.value)}*/
                                {...register("userName", {required: true})}
                            />

                            <img className={"log"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgdJREFUSEuNlj1rVUEQhp9BrBOJKSxDsLIRYiuWaSIEDMTGxs7GQmNKm0BAkEgQ/AliI+YDG/+AgoiFpDJYGgRNoUIgEEfuObt7Zs7u3nO32rs7Ox/v+86cK6QlCIqG3wJhH86bg3DaXXbPK7uR6eCaxJ+16eficy5kKnBDYRO4Eq6/oKwD7wkHTfXZnuZ6aN0GXtIi1a423X8Cywr7BuUejIIMlD8NfAMuRCc9+yNgHjgxgV3C4wMIy6i8iXSn5D3gi6i8y2xMsWnb4RhR4CHI09rjkPUDVJ5ZG1tCpYKU4k1gz/JuZd04FZZQ3nYQeSkbkotsTAGHwMVArMcXfihcBv5kSjFxCiJwwVaBV1Y+RkW3FHa8Ax+qKtNePdeBJ6M+AM6AA5BHoB9iZRmMsSdqMrWjokZgTZqO5MyonEq92/veYjM6mWYzrDmYRVhDWQCuAjNJvO3jX8Bn4COwBfx0cMUAZQlyB3gOTI2c2ilbSfgYuIuwm8aJC+Bf3UfZzrjJqrT1JOsV4PU4DuaAr8C5bPwOMBrs/4LMgQa4RtV7Eb8A7mVNM8GBUd1j0I34xI0Kge8qXEpfLqudgbFrcvgEXPMBOqZPgfP9XsxItsrIA/9uxdH1fmJLQFsZF9KNnZm+XGNxS9A7DiaQY5eW2j8DBSyj6iaBdqxNrVgHUaHa4cBlIfdd/QepGcociyBxjgAAAABJRU5ErkJggg=="/>
                        </div>
                        {errors.userName && <span>This username is required</span>}

                        <p>Ingresa tu contraseña:</p>

                        <div className='InputCnt'>
                            <input
                                type="password"
                                placeholder="Password"
                                /*value={password}
                                onChange={(e) => setPassword(e.target.value)}*/
                                {...register("password", {required: true})}
                            />
                            <img className={"log"} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAgdJREFUSEuFlr9qVUEQxn/jK0iKlGpA0MpX0EIfQPIAdqKVpIuFYiBFCit9BgUltcG8QroIgoJVsBDfQEbO7uyf2Z1z7yku5+zOzsz3zTezVwRQlsfe2kJarU9aFwQ1e9vp7YP3ZSmwrOFS4MmpDz18+QxlQhAffgw8Be4b2HOUd8BpBt6j9zBygLX9HOwEOIhx8grhdeWsd1Z42VKDfeCjZf0G5b2dew4c2vtD4GxTKTbV4ALknqAvFN4O5ToUOFL4AjxqyQ81mCj3MP+BXAPdAf4MtrsCVyr8ReV6EkKgwE5FIRA1FYmTsnEmqOb1VOrqoKluUWDZjjVeRO8TaaJQy7rz43Fu3FDrQQFZUZoB6BP1THR9UCMvmj8SuD3TMmeXA6ef78BL4FNv5aAb8kvgzmhUUt2y/g2463orKHzkKyigHyeJzezMJ70WoG/AtVm0MmYmVsZWqKkMGx9AnlmmJyhPmgIt+cyN9D0RFTlRFGR3A+SXHb6F8mNlzPie6FvcqGgB/IDZRfltqG6C/Cw3yYA0oMg7Gm6UiuYzsEh4eb4CD4L6DV1dWtxbNhX5uZQOm+lEY8e7o93xZZA3ybQUcA3lPJcCmK3R2syp93Ys2eqlNVrpHNd1+Q/AwvMxsNfm41DOmbrFdPuoGBsif69d+n7d66SMpzKu+47xw7DFjLOOc+pW/wOGItoelRWG4wAAAABJRU5ErkJggg=="/>
                        </div>
                        
                        {errors.password && <span>This password is required</span>}

                        <button>Iniciar sesión</button>
                    
                </form>
            )}
        </div>
    );
}