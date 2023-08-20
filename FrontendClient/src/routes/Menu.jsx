import Tarjetas from "../Components/TarjetasCursos.jsx";
import DefaultLayout from "../Layout/DefaultLayout.jsx";

function MenuMain () {
    return (
        <body>
            <DefaultLayout
                Nombre={"Menu Principal"}
                Descripcion={"Aqui encontraras los temas que se veran en el curso"}
            />
            <div className={"Contenedor"}>
                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/Introduccion.jpg'}
                    Titulo={ "Introducción" }
                    Descripcion={ "Conoce tus inicios" }
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/tiposDatos.png'}
                    Titulo={ "Tipos de datos" }
                    Descripcion={ "Existe diferente tipos de la programacion, asi que a conocerlas" }
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/variables.jpg'}
                    Titulo={ "Variables" }
                    Descripcion={ "Las variables son fundamentales, vamos a conocerlas" }
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/Bucle.png'}
                    Titulo={ "Ciclos" }
                    Descripcion={ "¿Sera que que podemos salir de un Bucle?" }
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/BuclesFor.jpg'}
                    Titulo={ "Condicionales" }
                    Descripcion={ "¿Quieres guíar a tu computadora?" }
                />

                <Tarjetas
                    imagen={'http://localhost:5173/img/Menu/final.jpg'}
                    Titulo={ "Taller" }
                    Descripcion={ "¿Seguro que aprendistes, vamos a ver?" }
                />
            </div>
        </body>
    )
}

export default MenuMain;