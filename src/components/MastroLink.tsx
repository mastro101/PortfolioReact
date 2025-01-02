import { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
    children : ReactNode;
    href : string;
}

const MastroLink = ({children, href} : Props) => {
    
    return (
    <>
        <Link to={href} className="col nav-link fs-5 p-2">{children}</Link>
    </>
    )
}

export default MastroLink;