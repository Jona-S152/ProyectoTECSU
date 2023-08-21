import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <ul>
            <li>
                <Link to={"/menu"}>Menú</Link>
            </li>
            <li>
                <Link to={"/ranking"}>Ranking</Link>
            </li>
            <li>
                <Link to={"/minijuegos"}>Minijuegos</Link>
            </li>
        </ul>
    );
}