import Tarjetas from "../components/TarjetasCursos";

export function MenuPage() {
    return (
        <div>
            <div className={"Contenedor"}>
                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/Introduccion.jpg'}
                    Titulo={ "Introducción" }
                    Descripcion={ "Conoce tus inicios" }
                    ruta = "/introduccion"
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/tiposDatos.png'}
                    Titulo={ "Tipos de datos" }
                    Descripcion={ "Existe diferente tipos de la programacion, asi que a conocerlas" }
                    ruta = "/tipos-de-datos"
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/variables.jpg'}
                    Titulo={ "Variables" }
                    Descripcion={ "Las variables son fundamentales, vamos a conocerlas" }
                    ruta = "/variables"
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/Bucle.png'}
                    Titulo={ "Ciclos" }
                    Descripcion={ "¿Sera que que podemos salir de un Bucle?" }
                    ruta = "/bucles"
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/BuclesFor.jpg'}
                    Titulo={ "Condicionales" }
                    Descripcion={ "¿Quieres guíar a tu computadora?" }
                    ruta = "/condicionales"
                />
            </div>
        </div>
    )
}