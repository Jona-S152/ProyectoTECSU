import SliderComponent from "../components/Slider";
import {ButtonOne} from "../components/ButtonOne";
import { Link } from "react-router-dom";
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
                <Link to="/tipos-de-datos" className="boton-comenzar">Comenzar</Link>
            </div>
        </>
    );
}