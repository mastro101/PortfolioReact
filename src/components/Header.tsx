import { ReactNode } from "react"
import './Mastro.css'
import { Link } from "react-router"

interface Props {
    children : ReactNode
}

const Header = ({children} : Props) => {
    return (
        <>
            <div className='mastro-header d-flex align-items-center justify-content-center w-100'>
                <div className='w-75'>
                    <Link to='/' className="mastro-orange w-25"><h1>{children}</h1></Link>
                </div>
            </div>
        </>
    )
}

export default Header