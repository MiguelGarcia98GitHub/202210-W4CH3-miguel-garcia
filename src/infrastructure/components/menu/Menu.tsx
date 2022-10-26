import "./menu.module.css";
import { Link } from "react-router-dom";

export function Menu() {
    const menuOptions = [
        { id: 1, path: "", label: "Inicio" },
        { id: 2, path: "todo", label: "Tareas" },
    ];

    return (
        <nav>
            <ul>
                {menuOptions.map((item) => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path}> {item.label} </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
