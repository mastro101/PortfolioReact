import { ReactNode } from "react";
import { Link } from "react-router";
import { ProjectData } from "../interfaces/ProjectsData";

interface Props {
    myData : ProjectData,
    heightPosition : number
}

const Card = ({myData, heightPosition} : Props) => {

    const style = {
        objectPosition: '50% ' + heightPosition + '%',
    };

    return (
    <>
        <a href={myData.url} target="_blank" className="card">
            <img src={"src/img/" + myData.promoImg} className="crop-h" alt="..." style={style}/>
            <div className="card-body">
                <h5 className="card-title">{myData.name}</h5>
                <p className="card-text">{myData.author}</p>
            </div>
            <p className="card-text p-3"><small className="text-body-secondary">{myData.date}</small></p>
        </a>
    </>
    )
}

export default Card;