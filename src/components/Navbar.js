import { NavLink } from "react-router-dom";
import './navbar.css'
export default function Navbar(){
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active": "")}  to='/HomePage'>HOME</NavLink>
                    
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active": "")}  to='/AltasPage'>ALTA</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => (isActive ? "active": "")}  to='/ModPage'>EDITAR</NavLink>

                </li>
                <li>
                <NavLink className={({isActive}) => (isActive ? "active": "")}  to='/BajasPage'>ELIMINAR</NavLink>
                </li>
            </ul>
        </div>

    ) 
    
}