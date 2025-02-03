import { ReactNode } from "react";
import { Link } from "react-router";
import { ProjectData } from "../interfaces/ProjectsData";
import { CIcon } from '@coreui/icons-react';
import { cilList, cibItchIo, cibSteam } from '@coreui/icons';

interface Props {
    myData : ProjectData,
}

const Card = ({myData} : Props) => {

    const itchIcon = <CIcon icon={cibItchIo} size="xxl"/>
    const steamIcon = <CIcon icon={cibSteam} size="xxl"/>
    const ggjIcon = <img className="icon m-0" src="https://globalgamejam.org/themes/custom/ggj_v4/logo.svg" style={{height:"1.5rem", width:"2.5rem"}}/>
    const style = {
        objectPosition: '50% ' + myData.heightPosition + '%',
    };

    return (
    <>
        <a href={myData.url} target="_blank" className="card border-light">
            <img src={window.location.origin + "/mastrofolio/img/" + myData.promoImg} className="crop-h" alt="..." style={style}/>
            <div className="card-body">
                <div className="row mb-2">
                    <h5 className="col card-title">{myData.name}</h5>
                    <div className="col-3 text-end card-text"><small className="text-body-secondary">{myData.date}</small></div>
                </div>
                <div className="row">
                    <div className="col card-text">{myData.author}</div>
                    <div className="col text-end">{myData.steam ? steamIcon : null} {myData.itch ? itchIcon : null} {myData.ggj ? ggjIcon : null}</div>
                </div>
            </div>
        </a>
    </>
    )
}

export default Card;