import CardGroup from "./CardGroups";
import '../CSS/Icons.css'

function AboutMe() {

    return (
    <>
        <div className="container">
            <div className="mb-5">
                <p>Salve</p>
                <p>I'm Matteo, and I'm an Italian developer specialized in C#</p>
                <div className="d-flex flex-wrap">
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                </div>
            </div>
            <div className="mb-5">
                <h2>Web Development <i className="bi bi-globe2"></i></h2>
                <p>As a Full Stack Developer I worked in team developing front page, private and public API, database, debug and client support</p>
                <div className="d-flex flex-wrap mb-3 w-50">
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original-wordmark.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" />
                </div>
                <p>For this website I used React so that I can learn a new framework</p>
                <div className="d-flex flex-wrap">
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                </div>
            </div>
            <div className="mb-5">
                <h2>Game Programmer <i className="bi bi-controller align-bottom"></i></h2>
                <p>I worked with various teams in the creation of videogames and partecipate in Game Jams</p>
                <div className="d-flex flex-wrap mb-3">
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" />
                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                </div>
            </div>
        </div>
        {/* <div className="mb-5 d-sm-none d-lg-block">
            <CardGroup/>
        </div> */}
    </>
    )
}

export default AboutMe;