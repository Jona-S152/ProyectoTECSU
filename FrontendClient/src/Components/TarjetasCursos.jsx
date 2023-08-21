// Objetivo: Mostrar las tarjetas de los cursos
import {ButtonOne} from "./ButtonOne.jsx";
import '../index.css'

function Tarjetas({imagen, Titulo, Descripcion}){

  return (
    <div className={'ContenedorTarjetas'}>
        <img src={imagen} alt="Imagen del curso"/>
        <h2>{Titulo}</h2>
        <p>{Descripcion}</p>
        <ButtonOne
            title="Comenzar"
        />
    </div>
  );
}

export default Tarjetas;