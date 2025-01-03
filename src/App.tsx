import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { BootstrapColors } from "./helper/Enumerators";
import ListGroup from "./components/ListGroup";
import ButtonUnderline from "./components/ButtonUnderline";
import ImagePopUp from "./components/ImagePopUp";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import NavBar from "./components/NavBar";
import CardGroup from "./components/CardGroups";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import data from "./db/Projects.json"
import { Project } from "./components/Project";

function App() {

    const handleSelectItem = (item: string) => {
    setAlertVisibility(true)
    }

    const [alertVisible, setAlertVisibility] = useState(false);

    const projectRoutes = [];
    const l = data.projects.length;
    for (let i = 0; i < l; i++)
    {
      const d = data.projects[i]
      if (d.active)
      {
        projectRoutes.push(<Route path={d.name} element={<Project myData={d} />}/>)
      }
    }

    return (
    <>
        <Routes>
          <Route index             element={<CardGroup  />} />
          <Route path='Projects'>
            <Route index element={<Projects/>}/>
            {projectRoutes}
          </Route>
          <Route path="AboutMe"    element={<AboutMe    />} />
          {/* <Route path="ImagePopUp" element={<ImagePopUp />} /> */}
        </Routes>

        {/* <ListGroup items={['1', '2', '<urla di disperazione perchè non esiste un livello definibile essendo troppo potente>', '4']} heading="Seleziona un livello di Cuteness"
        onSelectItem={handleSelectItem}
        /> */}

        {/* { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Oh shit</Alert>} */}
        {/* <Button bootstrapColor="success" onClick={() => setAlertVisibility(!alertVisible)}>WAAA</Button> */}
        {/* <div>{ alertVisible && <img src={('src/cute.jpeg')} className="img-thumbnail" alt="..."/> }</div> */}

    </>
    )
}

export default App;