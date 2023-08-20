import React from 'react';
import '../index.css';
export default function SliderComponent({imagenes}){
    const [imagenActual, setImagenActual] = React.useState(0);
    const cantidadImagenes = imagenes?.length;
    if (!Array.isArray(imagenes) || cantidadImagenes <= 0) {
        return;
    }

    //Funcion para cambiar la imagen con botones
    const siguienteImagenes = () => {
        setImagenActual(imagenActual === cantidadImagenes - 1 ? 0 : imagenActual + 1);
    };

    const anteriorImagenes = () => {
        setImagenActual(imagenActual === 0 ? cantidadImagenes - 1 : imagenActual - 1);
    };
    return(
        <section className="contenedor__slider">
            <button className="slider__btn slider__btn--right" onClick={anteriorImagenes}>&#62;</button>
            {imagenes.map((imagen, index) => {
                return (
                    <div> {imagenActual === index && (
                        <img key={index} src={imagen} alt=""
                             className="slider__img"
                             id="slider__img" />
                        )}
                    </div>
                )
            })}
            <button className="slider__btn slider__btn--left" onClick={siguienteImagenes}>&#60;</button>
        </section>
    )
}