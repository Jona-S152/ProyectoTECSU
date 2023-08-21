import React from "react";
import SliderComponent from "../components/Slider";
import { Link } from "react-router-dom";

const Variables = () => {
    const variablesImg = [
        "http://localhost:5173/img/Variables/Variables1.png",
        "http://localhost:5173/img/Variables/Variables2.png",
    ]
    const variablesImg2 = [
        "http://localhost:5173/img/Variables/Variables3.png",
        "http://localhost:5173/img/Variables/Variables4.png",
        "http://localhost:5173/img/Variables/Variables5.png",
    ]
    return (
        <div className="tiposVariables">
            <h1>Variables <span>en la programación</span></h1>
            <SliderComponent
                imagenes={variablesImg}
            />
            <div className="containerVariables">
                <p>
                    Una variable es un espacio en la memoria del ordenador donde se almacena un valor. Este valor puede
                    cambiar a lo largo de la ejecución del programa.
                </p>
                <p>
                    Como se dijo al inicio, que las variables son com una caja que nos permite guardar un valor, pero
                    para poder guardar ese valor, primero debemos crear la caja, y para eso usamos la palabra reservada
                    <span className="code">var</span> seguido del nombre que le queremos dar a la variable.
                </p>
            </div>
            <SliderComponent
                imagenes={variablesImg2}
            />
            <div className={"contenedorEjemploVariable"}>
                <h2>Declaración de variables</h2>
                <p>
                    Para declarar una variable en python, se debe usar la palabra reservada <span
                    className="code">var</span> seguido del nombre que le queremos dar a la variable, y por último el
                    valor que queremos guardar en la variable.
                </p>
                <p>
                    Por ejemplo, si queremos guardar el número 5 en una variable llamada <span
                    className="code">numero</span>, lo haríamos de la siguiente manera:
                </p>
                <div className="code">
                    <pre>
                        <code>
                            var numero = 5
                        </code>
                    </pre>
                </div>
                <p>
                    En el ejemplo anterior, se declaró una variable llamada <span className="code">numero</span> y se
                    le asignó el valor 5.
                </p>
                <p>
                    En python, no es necesario declarar el tipo de variable que se va a usar, ya que python es un lenguaje
                    de programación de tipado dinámico, es decir, que el tipo de variable se define en tiempo de
                    ejecución.
                </p>
            </div>
            <div className={"contentImg"}>
                <img src={"http://localhost:5173/img/Variables/Variables7.png"} alt={"ejemplo"}/>
            </div>
            <button id="btn" class="button-class not-active">
                    <Link to={"/prueba1"}>Siguiente</Link>
            </button>
        </div>
    );
};

export default Variables;
