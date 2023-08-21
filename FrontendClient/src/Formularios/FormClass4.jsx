import { Link } from "react-router-dom";
import { useUserContext } from "../api/getUserId.api";

export function FormClass4({id}) {

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
                <p>¿Qué son las estructuras condicionales en programación?</p>
                <select id="pregunta1">
                    <option value="0">a.-Instrucciones para repetir una tarea varias veces.</option>
                    <option value="0">b.-Bloques de código que se ejecutan siempre, sin importar la situación.</option>
                    <option value="2">c.-Bloques de código que se ejecutan solo si se cumple una determinada condición. /</option>
                </select>


                <p>Pregunta 2:</p>
                <p>¿Cuál es la palabra clave utilizada en muchos lenguajes de programación para definir una estructura condicional?</p>
                <select id="pregunta2">
                    <option value="0">"while"</option>
                    <option value="2">b.-"if"</option>
                    <option value="0">c.-"function"</option>
                </select>


                <p>Pregunta 3:</p>
                <p>En una estructura "if-else", ¿qué bloque de código se ejecuta si la condición es falsa?</p>
                <select id="pregunta3">
                    <option value="0">a.-El bloque "if".</option>
                    <option value="2">b.-El bloque "else".</option>
                    <option value="0">c.-Ambos bloques se ejecutan.</option>
                </select>


                <p>Pregunta 4:</p>
                <p>¿Cuál de las siguientes opciones es un operador de comparación utilizado en condiciones?</p>
                <select id="pregunta4">
                    <option value="0">a.-"+"</option>
                    <option value="0">b.-"=="</option>
                    <option value="2">c.-"/="</option>
                </select>


                <p>Pregunta 5:</p>
                <p>¿Qué se debe usar en lugar de los puntos suspensivos para crear una condición en un lenguaje de programación?</p>
                <select id="pregunta5">
                    <option value="0">a.-Comas (,).</option>
                    <option value="2">b.-Paréntesis ().</option>
                    <option value="0">c.-Llaves {}.</option>
                </select>
                <p></p>
                <button id="verificar" onClick="verificarRespuestas()">Verificar Respuestas</button>
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
                    <a href="../html/download/Clase 3 - Condicionales if.py" download="">Comenzar</a>
                </button>
                <button id="btn" class="button-class not-active">
                        <Link to={"/minijuegos"}>Siguiente</Link>
                </button>
                <script src="../javascript/Sumar.js"></script>
            </div>
            </div>
        
    </body>
    );
}

FormClass4.defaultProps = {
    id: 3, // ID predeterminado para el componente FormClass
};