// Página que muestra tipos de datos
import React from 'react';
import TipoDato from "../Components/Class.jsx"; // Importa el componente TipoDato

const TiposDeDatosPage = () => {
    return (
        <div className="tipos-de-datos-page">
            <h1>Tipos de Datos en Programación</h1>
            <div className="tipos-de-datos-container">
                <h2>Numero Enteros</h2>
                <p>
                    Los números enteros son aquellos que no tienen decimales, por ejemplo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
                    En programación se les conoce como <strong>int</strong> o <strong>Integer</strong>.
                </p>
                <div></div>
                <h2>Numero Decimales</h2>
                <p>
                    Los números decimales son aquellos que tienen decimales, por ejemplo: 1.5, 2.3, 3.4, 4.5, 5.6, 6.7, 7.8, 8.9, 9.0, 10.1.
                    En programación se les conoce como <strong>float</strong> o <strong>double</strong>.
                </p>
                <p>
                    Donde <strong>float</strong> es un número decimal de precisión simple y <strong>double</strong> es un número decimal de precisión doble.<br/>
                    Que si recien empezamos no vamos a notar mucha la diferencia, pero si trabajamos con números muy grandes o muy pequeños, la diferencia es muy grande.
                </p>
                <div></div>
                <h2>Caracteres o Cadena de caracters</h2>
                <p>
                    Los caracteres son aquellos que representan una letra, un número o un símbolo, por ejemplo: a, b, c, d, e, f, g, h, i, j, k, l, m, n, ñ, o, p, q, r, s, t, u, v, w, x, y, z.
                    En programación se les conoce como <strong>char</strong> o <strong>Character</strong>.
                </p>
                <p>
                    Las cadenas de caracteres son una serie de caracteres, por ejemplo: "Hola Mundo".
                    En programación se les conoce como <strong>string</strong>.
                </p>
                <div></div>
                <h2>Booleanos</h2>
                <p>
                    Los booleanos son aquellos que representan un valor verdadero o falso, por ejemplo: true o false.
                    En programación se les conoce como <strong>bool</strong> o <strong>Boolean</strong>.
                </p>
                <div></div>
            </div>
        </div>
    );
};

export default TiposDeDatosPage;
