import SliderComponent from "../components/Slider";
import React from "react";
import PythonRunner from "../Compilador/compilador";
import { Link } from "react-router-dom";


function Bucles (){
    const intro = [
        'http://localhost:5173/img/Bucles/Intro%20Bucles/Bucles1.png',
        'http://localhost:5173/img/Bucles/Intro%20Bucles/Bucles2.png',
    ];

    const concept = [
        'http://localhost:5173/img/Bucles/Que%20es/1.png',
        'http://localhost:5173/img/Bucles/Que%20es/2.png',
    ];
    const bucleFor = [
        'http://localhost:5173/img/Bucles/For/For1.png',
        'http://localhost:5173/img/Bucles/For/For2.png',
    ]

    const bucleWhile = [
        'http://localhost:5173/img/Bucles/While/While1.png',
        'http://localhost:5173/img/Bucles/While/While2.png',
    ]

    const conclusion = [
        'http://localhost:5173/img/Bucles/Conclusion/Conclusion1.png',
        'http://localhost:5173/img/Bucles/Conclusion/Conclusion2.png',
    ]
    return (
        <body className={'bodyclass'}>
        <div className="tipos-de-datos-page">
            <h1 className={"titleClass"}>Bucles de la programación</h1>
                <SliderComponent
                    imagenes={intro}
                />

            <div className={"contenedorTextClass3"}>
                <h2 className={"subtituloClass"}>¿Qué son los bucles?</h2>
                <SliderComponent
                    imagenes={concept}
                />
                <p className={"text"}>
                    Los bucles son estructuras de control que nos permiten repetir un bloque de código un número determinado de veces.
                    En programación se les conoce como <strong>loops</strong>.
                    Eso quiere decir que si queremos que un bloque de código se repita 10 veces, no tenemos que escribir 10 veces ese bloque de código, sino que podemos usar un bucle.
                    Los bucles son muy útiles para repetir tareas que son iguales o muy parecidas.
                    Por ejemplo, si queremos imprimir 10 veces la palabra "Hola", podemos usar un bucle para no tener que escribir 10 veces la misma instrucción.
                </p>
            </div>
            <div className={"contenedorTextClass3"}>
                <h2 className={"subtituloClass"}>Bucle For</h2>
                <SliderComponent
                    imagenes={bucleFor}
                />
                <p className={"text"}>
                    El bucle for es un bucle que se ejecuta un número determinado de veces, por ejemplo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
                    En programación se les conoce como <strong>for</strong>.<br/>
                    <br/> Puedes ver un ejemplo de un bucle for en Python:<br/>
                    <span>for i in range(10):
                    print(i)</span>
                    <br/>El código anterior imprimirá los números del 0 al 9, ya que el bucle for se ejecutará 10 veces.
                    <br/>
                </p>
                <div>
                    <h3>Escribe el ejemplo</h3>
                    <PythonRunner/>
                </div>
            </div>
            <div className={"contenedorTextClass3"}>
                <h2 className={"subtituloClass"}>El ciclo While</h2>
                <SliderComponent
                    imagenes={bucleWhile}
                />
                <p className={"text"}>
                    El bucle while es un bucle que se ejecuta mientras se cumpla una condición, por ejemplo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
                    En programación se les conoce como <strong>while</strong>.
                    Ademas, el bucle while tiene 2 partes:
                    <ul>
                        <li>La primera parte es la condición, donde se evalúa una condición.</li>
                        <li>La segunda parte es el incremento, donde se incrementa la variable.</li>
                    </ul>
                    <br/> Puedes ver un ejemplo de un bucle while en Python:<br/>
                    <span className={"ejemplo"}>i = 0<br/>
                    while i &#60; 10:<br/>
                    print(i)<br/>
                    i += 1</span>
                </p>
                <div>
                    <h3>Escribe el ejemplo</h3>
                    <PythonRunner/>
                </div>
            </div>
            <div className={"contenedorPractica"}>
                <h2>Practiquemos un poco</h2>
                <div className={"contenedorEjercicio"}>
                    <p>
                        Ahora que ya sabes como funcionan los bucles, vamos a practicar un poco.
                        <br/>Escribe un programa que imprima los números del 1 al 10.
                    </p>
                    <p>
                        Crea un ciclo for en cual se usen dos variables, "Nombre" y "apellido" y se muestre cinco veces.
                    </p>
                    <PythonRunner/>
                    <PythonRunner/>
                </div>
            </div>
            <SliderComponent
                imagenes={conclusion}
            />
        </div>
        <button id="btn" class="button-class not-active">
                <Link to={"/prueba2"}>Siguiente</Link>
        </button>
        </body>
    );
}

export default Bucles;