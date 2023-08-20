import React from "react";
import SliderComponent from "../Components/Slider.jsx";

const Variables = () => {
    const variablesImg = [
        "https://i.ibb.co/0jXJY5q/variables-1.png",
        "https://i.ibb.co/0jXJY5q/variables-1.png",
    ]
    return (
        <div className="tiposVariables">
            <h1>Variables en la programación</h1>
            <SliderComponent
                imagenes={variablesImg}
            />
            <div className="containerVariables">
                <p>
                    Una variable es un espacio en la memoria del ordenador donde se almacena un valor. Este valor puede
                    cambiar a lo largo de la ejecución del programa.
                </p>
                <div></div>
                <p>
                    Como se dijo al inicio, que las variables son com una caja que nos permite guardar un valor, pero
                    para poder guardar ese valor, primero debemos crear la caja, y para eso usamos la palabra reservada
                    <span className="code">var</span> seguido del nombre que le queremos dar a la variable.
                </p>
                <div></div>
            </div>
        </div>
    );
};

export default Variables;
