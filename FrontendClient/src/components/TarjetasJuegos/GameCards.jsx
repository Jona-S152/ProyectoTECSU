import { Link } from "react-router-dom";
import '../../index.css'

function Tarjetas({imagen, Titulo, Descripcion, ruta}){

  return (
    <div className={'ContenedorTarjetas'}>
        <img src={imagen} alt="Imagen del curso"/>
        <h2>{Titulo}</h2>
        <p>{Descripcion}</p>
        <Link to={ruta} className="boton-comenzar">Comenzar</Link>
    </div>
  );
}

export default Tarjetas;