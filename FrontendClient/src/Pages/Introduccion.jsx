import SliderComponent from "../Components/Slider.jsx";
import {ButtonOne} from "../Components/ButtonOne.jsx";
import '../index.css';

export default function Introduccion(){
    const carruselImg = [
        'http://localhost:5173/img/Intro/Saludo1.png',
        'http://localhost:5173/img/Intro/Saludo1.1.png',
    ];
    return (
        <>
            <h2 className={'tituloClase'}>INTRODUCCION</h2>
            <div className={'contenedorIntroduccion'}>
                <SliderComponent imagenes={carruselImg} />
                <ButtonOne title={'Comenzar'} />
            </div>
        </>
    );
}