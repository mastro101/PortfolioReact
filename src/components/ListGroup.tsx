import { MouseEvent, useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem} : Props) {
    // let items = [
    //     'D:<',
    //     'À_Á',
    //     'È_É',
    //     'Ì__í'
    // ];

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getRudeness = () => {
        //return items.length === 0 ? <><h1>:D</h1><p>no rudeness</p></> : <h1>&gt;:(</h1>;
        return items.length === 0 ? <><h1>:D</h1><p>no rudeness</p></> : <h1>{heading}</h1>;
    }

    const handleClickBase = (event : MouseEvent) => console.log(event)

    const handleClick = (event : MouseEvent, item : string, index : number) => {
        setSelectedIndex(index);
        //selectedIndex is not updated yet
        console.log(item, index);
        handleClickBase(event);
    }

    return (
        <>
            {getRudeness()}
            <ul className="list-group">
                { items.map((item, index) => 
                    <li 
                        className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item} 
                        onClick={(event) => {handleClick(event, item, index); onSelectItem(item)}}
                        //onClick={handleClickBase}
                    >
                        {item}
                    </li>)
                }
            </ul>
        </>
    );
}

export default ListGroup;