// Componente para tipos de datos
import React from 'react';

const Contenido = ({ nombre, descripcion }) => (
    <div className="tipo-dato">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
    </div>
);

export default Contenido;
