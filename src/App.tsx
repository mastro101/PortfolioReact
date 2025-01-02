import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { BootstrapColors } from "./helper/Enumerators";
import ListGroup from "./components/ListGroup";
import ButtonUnderline from "./components/ButtonUnderline";
import ImagePopUp from "./components/ImagePopUp";
import { Route, Router } from "react-router";
import NavBar from "./components/NavBar";
import CardGroup from "./components/CardGroups";

function App() {

    const handleSelectItem = (item: string) => {
    setAlertVisibility(true)
    }

    const [alertVisible, setAlertVisibility] = useState(false);

    return (
    <div>

      <CardGroup></CardGroup>

      {/* <ListGroup items={['1', '2', '<urla di disperazione perchè non esiste un livello definibile essendo troppo potente>', '4']} heading="Seleziona un livello di Cuteness"
      onSelectItem={handleSelectItem}
      /> */}

      {/* { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Oh shit</Alert>} */}
      {/* <Button bootstrapColor="success" onClick={() => setAlertVisibility(!alertVisible)}>WAAA</Button> */}
      {/* <div>{ alertVisible && <img src={('src/cute.jpeg')} className="img-thumbnail" alt="..."/> }</div> */}

    </div>
    )
}

export default App;