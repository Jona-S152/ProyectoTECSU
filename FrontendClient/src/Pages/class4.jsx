import SliderComponent from "../Components/Slider.jsx";
import PythonRunner from "../Compilador/compilador.jsx";
import React from "react";

function Condicionales(){
    const intro = [
        'http://localhost:5173/img/Condicionales/Intro%20condicionales/Condicionales1.png',
        'http://localhost:5173/img/Condicionales/Intro%20condicionales/Condicionales1.png',
    ]

    const concepto = [
        'http://localhost:5173/img/Condicionales/Que%20son/Condicionales1.png',
        'http://localhost:5173/img/Condicionales/Que%20son/Condicionales2.png',
    ]

    const casoif = [
        'http://localhost:5173/img/Condicionales/If/If1.png',
        'http://localhost:5173/img/Condicionales/If/If2.png',
    ]

    const ejemploif = [
        'http://localhost:5173/img/Condicionales/Ejemplo%20if/EjemploIf1.png',
        'http://localhost:5173/img/Condicionales/Ejemplo%20if/EjemploIf2.png',
    ]
    return(
        <body>
        <h1 className={"titleClass"}>Condicionales</h1>
            <SliderComponent
                imagenes={intro}
            />
        <div className={"contenedorTextClass3"}>
            <SliderComponent
                imagenes={concepto}
            />
            <div className={"contenedorClass"}>
                <p>
                    Por lo general, los programas se ejecutan de arriba hacia abajo, de manera secuencial, es decir, una instrucción se ejecuta
                    después de la otra. Sin embargo, en ocasiones es necesario que el programa tome decisiones y ejecute una instrucción u otra en
                    función de una condición. Para ello, se utilizan las estructuras de control condicionales.
                </p>
            </div>
        </div>
        <div className={"contenedorTextClass3"}>
            <SliderComponent
                imagenes={casoif}
            />
            <div className={"contenedorClass"}>
                <p>
                    La estructura de control condicional if permite ejecutar un bloque de instrucciones si se cumple una condición. En caso de que
                    no se cumpla, se puede ejecutar otro bloque de instrucciones alternativo.<br/>
                    La sintaxis de la estructura if es la siguiente:
                        if (condición) <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;instrucción1; <br/>
                        else <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;instrucción2; <br/>
                        La condición es una expresión que puede ser verdadera o falsa. Si es verdadera, se ejecuta la instrucción1. Si es falsa, se
                        ejecuta la instrucción2. La instrucción2 es opcional, es decir, se puede omitir el else y la instrucción2. En ese caso, si la
                        condición es falsa, no se ejecuta ninguna instrucción.
                </p>
            </div>
        </div>
        <div className={"contenedorCondicional"}>
            <SliderComponent imagenes={ejemploif}/>
            <div className={"contenedorClass"}>
                <p>
                    La condiciona evualua si True o false, datos booleanos, si es verdadero se ejecuta la instruccion 1, si es falso se ejecuta la
                    instruccion 2.
                    Como el paraguas que si llueve se usa el paraguas, si no llueve no se usa el paraguas.<br/>
                    Ahora vamos a ver un ejemplo de como se usa el if en python.
                    2 es mayor que 3? <br/>
                    Vamos ejecutar el siguiente codigo en python para ver que pasa.<br/>
                    if 2 &#62; 3: <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("2 es mayor que 3") <br/>
                    else: <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;print("2 no es mayor que 3") <br/>
                    <br/>
                    <PythonRunner/>
                    <p>
                        Como veras, preguntamos que si dos es mayor a 3, como es falso, se ejecuta la instruccion 2, que es que 2 no es mayor que 3.
                    </p>
                    <p>
                        Veamos un caso que sea verdadero: <br/>
                        if 10 &#62; 5: <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;print("10 es mayor que 5") <br/>
                        else: <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;print("10 no es mayor que 5") <br/>
                        <br/>
                        <PythonRunner/>
                        <p>
                            Como veras, preguntamos que si 10 es mayor a 5, como es verdadero, se ejecuta la instruccion 1, que es que 10 es mayor que 5.
                        </p>
                    </p>
                </p>
            </div>
        </div>
        <div className={"contenedorPractica"}>
            <h2>Practiquemos un poco</h2>
            <div className={"contenedorEjercicio"}>
                <p>
                    Ya vimos un poco lo que es una condicional if, ahora vamos a practicar un poco, vamos a hacer un programa que nos diga si un
                    numero es par o impar, para ello vamos a usar el modulo %, que nos da el resto de una division, si el resto es 0, es par, si
                    el resto es 1, es impar.
                </p>
                <p>
                    Como segunda practica, vamos a hacer un programa que nos diga si un numero es positivo o negativo, para ello vamos a usar el
                    if, si el numero es mayor a 0, es positivo, si es menor a 0, es negativo.
                </p>
                <PythonRunner/>
                <PythonRunner/>
            </div>
        </div>
        </body>
    )
}

export default Condicionales;