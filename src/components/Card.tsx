import { ReactNode } from "react";
import { Link } from "react-router";
import { ProjectData } from "../interfaces/ProjectsData";

interface Props {
    myData : ProjectData,
}

const Card = ({myData} : Props) => {

    const style = {
        objectPosition: '50% ' + myData.heightPosition + '%',
    };

    return (
    <>
        <Link to={myData.name} className="card border-light">
            <img src={"/src/img/" + myData.promoImg} className="crop-h" alt="..." style={style}/>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-title">{myData.name}</h5>
                        <p className="card-text">{myData.author}</p>
                    </div>
                    <p className="col-3 card-text"><small className="text-body-secondary">{myData.date}</small></p>
                </div>
            </div>
        </Link>
    </>
    )
}

export default Card;