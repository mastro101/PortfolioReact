import { Link } from "react-router";
import MastroLink from "./MastroLink";

const NavBar = () => {
    return (
    <>
        <nav className="navbar mb-lg-5 mb-4 d-flex justify-content-evenly text-center mastro-orange fs-5">
            <Link to='/AboutMe'     className="nav-link p-2">About Me</Link>
            <Link to='/Projects'    className="nav-link p-2">Projects</Link>
            <Link to='/Contacts'    className="nav-link p-2">Contacts</Link>
        </nav>
    </>
    )
}

export default NavBar;