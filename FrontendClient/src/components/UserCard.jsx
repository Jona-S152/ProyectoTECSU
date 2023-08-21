

export function UserCard({user}) {
    return (
        <div>
            <ul>
                <li>{user.usuario_id}</li>
                <li>{user.suma_calificaciones}</li>
            </ul>
        </div>
    )
}