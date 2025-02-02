import { Link } from "react-router";
import Card from "./Card";
import data from "../db/Projects.json"

const CardGroup = () => {

    const text1 = "i'm a duck"

    const progects = [];
    for(let i = 0; i < data.projects.length; i++)
    {
        let currentProject = data.projects[i];
        if (currentProject.active == false)
            continue;

        progects.push(
            <Card myData={currentProject}/>
        );
        
        if (progects.length >= 5)
            break;
    }

    return (
    <>
        
        {/* <iframe className="w-100" style={{height: "650px"}} src="https://html-classic.itch.zone/html/12515981/Portfolio/index.html" title="Mastrofolio" allowFullScreen></iframe> */}

        <div className="card-group">
            {progects}
        </div>
    </>
    )
}

export default CardGroup;