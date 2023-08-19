import Tarjetas from "../Components/TarjetasCursos.jsx";
import DefaultLayout from "../Layout/DefaultLayout.jsx";

function MenuMain () {
    return (
        <body>
            <DefaultLayout/>
            <div className={"Contenedor"}>
                <Tarjetas
                    imagen={'https://www.aauniv.com/s/blog/wp-content/uploads/2022/03/lenguajes-de-programacion-1024x572.jpeg'}
                    Titulo={ "Introducción" }
                    Descripcion={ "Conoce tus inicios" }
                />

                <Tarjetas
                    imagen={"img/tiposDatos.png"}
                    Titulo={ "Tipos de datos" }
                    Descripcion={ "Existe diferente tipos de la programacion, asi que a conocerlas" }
                />

                <Tarjetas
                    imagen={ ""}
                    Titulo={ "Variables" }
                    Descripcion={ "Las variables son fundamentales, vamos a conocerlas" }
                />

                <Tarjetas
                    imagen={ ""}
                    Titulo={ "Ciclos" }
                    Descripcion={ "¿Sera que que podemos salir de un Bucle?" }
                />

                <Tarjetas
                    imagen={ ""}
                    Titulo={ "Condicionales" }
                    Descripcion={ "¿Quieres guíar a tu computadora?" }
                />

                <Tarjetas
                    imagen={ ""}
                    Titulo={ "Taller" }
                    Descripcion={ "¿Seguro que aprendistes, vamos a ver?" }
                />
            </div>
        </body>
    )
}

export default MenuMain;