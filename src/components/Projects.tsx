import { Project } from "./Project"
import data from "../db/Projects.json"
import { ProjectMobile } from "./ProjectMobile";
import Card from "./Card";

const Projects = () => {

    const projectsLg = [];
    const projectsMobile = [];
    const l = data.projects.length;
    for (let i = 0; i < l; i++)
    {
        if (data.projects[i].active)
        {
            projectsLg.push(
                <div className="col-4 mb-3 p-2" key={i + "_lg"}>
                    <Card myData={data.projects[i]} />
                </div>
            )

            projectsMobile.push(
                <div key={i + "_mobile"}>
                    <ProjectMobile myData={data.projects[i]}></ProjectMobile>
                </div>
            )
        }
    }

    return (
    <>
        <div className="d-none d-lg-flex row">
            {projectsLg}
        </div>
        <div className="d-lg-none">
            {projectsMobile}
        </div>
    </>
    )
}

export default Projects