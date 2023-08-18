// Funcionalidad: Componente para mostrar el usuario logueado
function Users(Avatar, {username}) {
    return (
        <nav>
            <div className="Usuario">
                <img src={Avatar} alt="Avatar"/>
                <strong>{username}</strong>
            </div>
        </nav>
    )

}
