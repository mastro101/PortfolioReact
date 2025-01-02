import { Project } from "./Project"
import data from "../db/Projects.json"

const Projects = () => {

    const projects =  [];
    const l = data.projects.length;
    for (let i = 0; i < l; i++)
    {
        if (data.projects[i].active)
            projects.push(<Project myData={data.projects[i]}></Project>)
    }

    return (
    <>
        <div className="d-none d-lg-flex row">
            {projects}
        </div>
        <div className="d-lg-none">
            {projects}
        </div>
    </>
    )
}

export default Projects