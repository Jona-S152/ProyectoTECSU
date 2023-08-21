import SliderComponent from "../Components/Slider.jsx";
import React from "react";

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
    return (
        <body className={'bodyclass'}>
        <div className="tipos-de-datos-page">
            <h1 className={"titleClass"}>Bucles de la programación</h1>
                <SliderComponent
                    imagenes={intro}
                />

            <div className={"contenedorConcepto"}>
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
            <div className={"contenedorConcepto"}>
                <h2 className={"subtituloClass"}>Bucle For</h2>
                <SliderComponent
                    imagenes={bucleFor}
                />
                <p className={"text"}>
                    El bucle for es un bucle que se ejecuta un número determinado de veces, por ejemplo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
                    En programación se les conoce como <strong>for</strong>.
                    Ademas, el bucle for tiene 3 partes:
                    <ul>
                        <li>La primera parte es la inicialización, donde se inicializa una variable.</li>
                        <li>La segunda parte es la condición, donde se evalúa una condición.</li>
                        <li>La tercera parte es el incremento, donde se incrementa la variable.</li>
                    </ul>
                </p>
            </div>
            <div className={"contenedorConcepto tema4"}>
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
                </p>
            </div>
        </div>
        </body>
    );
}

export default Bucles;