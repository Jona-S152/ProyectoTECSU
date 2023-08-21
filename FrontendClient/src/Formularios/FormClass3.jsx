import { Link } from "react-router-dom";
import { useUserContext } from "../api/getUserId.api";

export function FormClass3({id}) {

    const { userId } = useUserContext();
    console.log("userId:", userId); // Imprime el userId en la consola
    console.log(`FormClass ID: ${id}`);

    return (
        <body>
            <div id={`formClass-${id}`}>
                <section class="contenedor__practica">
                    
                    <h1>Prueba de utilizar lista para validar una opción</h1>
                    <p>Escoja las respuestas correctas y valide.</p>
                    <h2>Preguntas</h2>
                    <p>Pregunta 1:</p>
                    <p>¿Qué son los bucles en programación?</p>
                    <select id="pregunta1">
                        <option value="0">a.-Instrucciones que permiten leer datos desde el teclado.</option>
                        <option value="2">b.-Estructuras que permiten repetir un bloque de código varias veces.</option>
                        <option value="0">c.-Funciones que se utilizan para realizar operaciones matemáticas./</option>
                    </select>


                    <p>Pregunta 2:</p>
                    <p>¿Cuál es el propósito principal de los bucles?</p>
                    <select id="pregunta2">
                        <option value="0">a.-Realizar operaciones matemáticas complejas.</option>
                        <option value="0">b.-Evitar que un programa se ejecute.</option>
                        <option value="2">c.-Ejecutar un conjunto de instrucciones repetidamente hasta que se cumpla una condición.</option>
                    </select>


                    <p>Pregunta 3:</p>
                    <p>¿Cuál es la palabra clave utilizada en muchos lenguajes de programación para crear un bucle "while"?</p>
                    <select id="pregunta3">
                        <option value="2">a.-"while"</option>
                        <option value="0">b.-"loop"</option>
                        <option value="0">c.-"for"</option>
                    </select>


                    <p>Pregunta 4:</p>
                    <p>¿Cuál es la diferencia entre un bucle "while" y un bucle "for"?</p>
                    <select id="pregunta4">
                        <option value="2">a.-Un bucle "for" se repite un número fijo de veces, mientras que un bucle "while" se repite mientras se cumpla una condición.</option>
                        <option value="0">b.-No hay diferencia, son iguales.</option>
                        <option value="0">c.-Un bucle "while" se repite un número fijo de veces, mientras que un bucle "for" se repite mientras se cumpla una condición.</option>
                    </select>


                    <p>Pregunta 5:</p>
                    <p>¿Qué se utiliza para evitar bucles infinitos?</p>
                    <select id="pregunta5">
                        <option value="0">a.-No se pueden evitar, todos los bucles son infinitos.</option>
                        <option value="0">b.-Es imposible evitar bucles infinitos en programación.</option>
                        <option value="2">c.-Instrucciones dentro del bucle que permiten que la condición se vuelva falsa en algún momento.</option>
                    </select>


                    <p></p>
                    <button id="verificar" onclick="verificarRespuestas()">Verificar Respuestas</button>
                    <p id="resultado"></p>

                    <script src="../javascript/Sumar.js"></script>
                </section>

                <section class="contenedor__imgForm">
                    <div class="Form" id="Formulario1">
                            <img class="slider__form" src="http://localhost:5173/img/EnvioPractica.png" alt=""/>
                    </div>
                </section>

                <div class="contenedor__btn">
                    <button class="button-class">
                        <Link to={"/menu"}>Menú</Link>
                    </button>
                    <button class="button-class">
                        <a href="../html/download/Clase 4 - Ciclo for.py" download="">Comenzar</a>
                    </button>
                    <button id="btn" class="button-class not-active">
                        <Link to={"/condicionales"}>Siguiente</Link>
                    </button>
                    <script src="../javascript/Sumar.js"></script>
                </div>
            </div>
        </body>
    );
}

FormClass3.defaultProps = {
    id: 2, // ID predeterminado para el componente FormClass
};