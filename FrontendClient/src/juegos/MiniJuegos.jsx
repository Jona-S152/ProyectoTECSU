import Tarjetas from "../components/TarjetasJuegos/GameCards";

export function GameMenu() {
    return (
        <div>
            <div className={"Contenedor"}>
                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/Introduccion.jpg'}
                    Titulo={ "Candy crush" }
                    Descripcion={ "Candy crush con variables" }
                    ruta = "/candy-crush"
                />

            </div>
        </div>
    )
}