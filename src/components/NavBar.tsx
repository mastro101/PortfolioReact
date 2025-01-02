import { Link } from "react-router";
import MastroLink from "./MastroLink";

const NavBar = () => {
    return (
    <>
        <nav className="navbar mb-5">
            <div className="row w-100 text-center mastro-orange">
                <MastroLink href='/AboutMe'>About Me</MastroLink>
                <MastroLink href='/Projects'>Projects</MastroLink>
                <MastroLink href='/ImagePopUp'>Contacts</MastroLink>
            </div>
        </nav>
    </>
    )
}

export default NavBar;