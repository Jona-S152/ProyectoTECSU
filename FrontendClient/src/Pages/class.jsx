// Página que muestra tipos de datos
import React from 'react';
import '../index.css';
import SliderComponent from "../Components/Slider.jsx"; // Importa el archivo de estilos

const TiposDeDatosPage = () => {
    const enteros = [
        'http://localhost:5173/img/IntroSaludo%20-%20TiposDatos/Int/Int1.png',
        'http://localhost:5173/img/IntroSaludo%20-%20TiposDatos/Int/Int2.png',
    ];

    const double = [
        'http://localhost:5173/img/IntroSaludo%20-%20TiposDatos/Float%20-%20Double/Float-Double1.png',
        'http://localhost:5173/img/IntroSaludo%20-%20TiposDatos/Float%20-%20Double/Float-Double2.png',
    ];
    const cadenaaText = [
        'http://localhost:5173/img/IntroSaludo%20-%20TiposDatos/String/String1.png',
        'http://localhost:5173/img/IntroSaludo%20-%20TiposDatos/String/String2.png',
    ]

    const boolean = [
        'http://localhost:5173/img/IntroSaludo%20-%20TiposDatos/Bool/Bool1.png',
        'http://localhost:5173/img/IntroSaludo%20-%20TiposDatos/Bool/Bool2.png',
    ]
    return (
        <body className={'bodyclass'}>
            <div className="tipos-de-datos-page">
                <h1 className={"titleClass"}>Tipos de Datos en Programación</h1>
                <div className={"contenedorConcepto"}>
                    <h2 className={"subtituloClass"}>Numero Enteros</h2>
                    <SliderComponent
                        imagenes={enteros}
                    />
                    <p className={"text"}>
                        Los números enteros son aquellos que no tienen decimales, por ejemplo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
                        En programación se les conoce como <strong>int</strong> o <strong>Integer</strong>.
                    </p>
                </div>
                <div className={"contenedorConcepto"}>
                    <h2 className={"subtituloClass"}>Numero Decimales</h2>
                    <SliderComponent
                        imagenes={double}
                    />
                    <p className={"text"}>
                        Los números decimales son aquellos que tienen decimales, por ejemplo: 1.5, 2.3, 3.4, 4.5, 5.6, 6.7, 7.8, 8.9, 9.0, 10.1.
                        En programación se les conoce como <strong>float</strong> o <strong>double</strong>.<br/>
                        Donde <strong>float</strong> es un número decimal de precisión simple y <strong>double</strong> es un número decimal de precisión doble.<br/>
                        Que si recien empezamos no vamos a notar mucha la diferencia, pero si trabajamos con números muy grandes o muy pequeños, la diferencia es muy grande.
                    </p>
                </div>
                <div className={"contenedorConcepto"}>
                    <h2 className={"subtituloClass"}>Caracteres o Cadena de caracters</h2>
                    <SliderComponent
                        imagenes={cadenaaText}
                    />
                    <p className={"text"}>
                        Los caracteres son aquellos que representan una letra, un número o un símbolo, por ejemplo: a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z.
                        En programación se les conoce como <strong>char</strong> o <strong>Character</strong>.<br/>
                        Las cadenas de caracteres son una serie de caracteres, por ejemplo: "Hola Mundo".
                        En programación se les conoce como <strong>string</strong>.
                    </p>
                </div>
                <div className={"contenedorConcepto tema4"}>
                    <h2 className={"subtituloClass"}>Booleanos</h2>
                    <SliderComponent
                        imagenes={boolean}
                    />
                    <p className={"text"}>
                        Los booleanos son aquellos que representan un valor verdadero o falso, por ejemplo: true o false.
                        En programación se les conoce como <strong>bool</strong> o <strong>Boolean</strong>.
                    </p>
                </div>
            </div>
        </body>
    );
};

export default TiposDeDatosPage;
