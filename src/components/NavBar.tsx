import { Link } from "react-router";
import MastroLink from "./MastroLink";

const NavBar = () => {
    return (
    <>
        <nav className="navbar d-flex justify-content-evenly text-center mastro-orange fs-5">
            <Link to='/AboutMe'  className="nav-link btn btn-dark p-2">About Me</Link>
            <Link to='/Projects' className="nav-link btn btn-dark p-2">Projects</Link>
            <Link to='/Contacts' className="nav-link btn btn-dark p-2">Contacts</Link>
        </nav>
    </>
    )
}

export default NavBar;