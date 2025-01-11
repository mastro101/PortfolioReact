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
        <a href={myData.url} target="_blank" className="card border-light">
            <img src={window.location.origin + "/assets/img/" + myData.promoImg} className="crop-h" alt="..." style={style}/>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <h5 className="card-title">{myData.name}</h5>
                        <div className="card-text">{myData.author}</div>
                    </div>
                    <div className="col-3 card-text"><small className="text-body-secondary">{myData.date}</small></div>
                </div>
            </div>
        </a>
    </>
    )
}

export default Card;