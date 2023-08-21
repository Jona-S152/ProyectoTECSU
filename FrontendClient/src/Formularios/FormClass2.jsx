import { Link } from "react-router-dom";
import { useUserContext } from "../api/getUserId.api";
import {  } from "./javascript/script";
import React, { useState } from "react";

export function FormClass2({id}) {

    const { userId } = useUserContext();
    console.log("userId:", userId); // Imprime el userId en la consola
    console.log(`FormClass ID: ${id}`);

    const [selectedAnswers, setSelectedAnswers] = useState({
        pregunta1: "",
        pregunta2: "",
        pregunta3: "",
        pregunta4: "",
        pregunta5: "",
      });
      const [result, setResult] = useState("");
      const [buttonDisabled, setButtonDisabled] = useState(false);
    
      const respuestasCorrectas = {
        pregunta1: "2",
        pregunta2: "2",
        pregunta3: "2",
        pregunta4: "2",
        pregunta5: "2",
      };
    
      const handleAnswerSelect = (pregunta, respuesta) => {
        setSelectedAnswers((prevAnswers) => ({
          ...prevAnswers,
          [pregunta]: respuesta,
        }));
      };
    
      const handleVerificarClick = () => {
        let numRespuestasCorrectas = 0;
    
        for (const pregunta in selectedAnswers) {
          if (selectedAnswers[pregunta] === respuestasCorrectas[pregunta]) {
            numRespuestasCorrectas++;
          }
        }
    
        const nota = numRespuestasCorrectas * 2; // 2 puntos por respuesta correcta
    
        setResult(`Tu nota es: ${nota}/10`);
    
        setButtonDisabled(true);
      };

    return (
            <div id={`formClass-${id}`}>
                <section className="contenedor__practica">
                    <h1>Prueba de utilizar lista para validar una opción</h1>
                    <p>Escoja las respuestas correctas y valide.</p>
                    <h2>Preguntas</h2>
                    <p>Pregunta 1:</p>
                    <p>¿Qué son las variables en programación?</p>
                    <select id="pregunta1">
                        <option value="0">a.-Nombres de usuario en un programa.</option>
                        <option value="2">b.-Espacios de almacenamiento para datos que pueden cambiar su valor.</option>
                        <option value="0">c.-Funciones matemáticas predefinidas.</option>
                    </select>
                
                
                    <p>Pregunta 2:</p>
                    <p>¿Para qué se utilizan las variables en programación?</p>
                    <select id="pregunta2">
                        <option value="0">a.-Para hacer que el código se vea más bonito.</option>
                        <option value="2">b.-Para almacenar y manipular datos durante la ejecución de un programa.</option>
                        <option value="0">c.-Para imprimir mensajes en la pantalla.
                        </option>
                    </select>
                
                
                    <p>Pregunta 3:</p>
                    <p>¿Es necesario declarar una variable antes de usarla en un programa?</p>
                    <select id="pregunta3">
                        <option value="0">a.-Sí, siempre se debe declarar una variable antes de usarla.</option>
                        <option value="0">b.-No, las variables se declaran automáticamente en todos los lenguajes de programación.</option>
                        <option value="2">c.-Depende del lenguaje de programación utilizado.</option>
                    </select>
                
                
                    <p>Pregunta 4:</p>
                    <p>¿Qué significa el alcance (scope) de una variable?</p>
                    <select id="pregunta4">
                        <option value="0">a.-La distancia que puede recorrer una variable en un programa.</option>
                        <option value="0">b.-El período de tiempo en que una variable permanece sin cambios.</option>
                        <option value="2">c.-La región del programa donde una variable es accesible.</option>
                    </select>
                
                
                    <p>Pregunta 5:</p>
                    <p>¿Qué tipo de dato puede almacenar una variable numérica?</p>
                    <select id="pregunta5">
                        <option value="2">a.-Solo caracteres y texto.</option>
                        <option value="0">b.-Solo números enteros.</option>
                        <option value="0">c.-Números enteros y decimales (números con coma flotante).</option>
                    </select>
                    <p></p>
                    <button id="verificar" onClick={handleVerificarClick} disabled={buttonDisabled}>Verificar Respuestas</button>
                    {/* Mostrar resultado de la calificación */}
                    <p id="resultado">{result}</p>
                
                </section>

                <section className="contenedor__imgForm">
                    <div className="Form" id="Formulario1">
                            <img className="slider__form" src="http://localhost:5173/img/EnvioPractica.png" alt=""/>
                    </div>
                </section>

                <div className="contenedor__imgForm">
                    <button className="button-class">
                        <Link to={"/menu"}>Menú</Link>
                    </button>
                    <button className="button-class">
                        <a href="../html/download/Clase 2 - Variables.py" download="">Comenzar</a>
                    </button>
                    <button id="btn" className="button-class not-active">
                        <Link to={"/bucles"}>Siguiente</Link>
                    </button>
                </div>
            </div>
    );
}

FormClass2.defaultProps = {
    id: 1, // ID predeterminado para el componente FormClass
};

{/*
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba</title>
    <link rel="stylesheet" href="../html/preguntas.css">
    <link rel="stylesheet" href="../html/style.css">
    <link rel="stylesheet" href="../html/clase2/style.css">
    <link rel="stylesheet" href="../css/slider.css">
*/}
    

