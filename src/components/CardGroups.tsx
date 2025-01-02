import { Link } from "react-router";
import Card from "./Card";
import data from "../db/Projects.json"

const CardGroup = () => {

    const text1 = "i'm a duck"

    return (
    <>
        <div className="card-group">
            <Card myData={data.projects[0]} heightPosition={0} />
            <Card myData={data.projects[1]} heightPosition={0} />
            <Card myData={data.projects[2]} heightPosition={0} />
            <Card myData={data.projects[3]} heightPosition={0} />
            <Card myData={data.projects[4]} heightPosition={0} />
        </div>
    </>
    )
}

export default CardGroup;