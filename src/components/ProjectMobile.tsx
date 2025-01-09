import { ReactNode } from 'react'
import './Mastro.css'
import { ProjectData } from '../interfaces/ProjectsData'
import { data, Link } from 'react-router'
import Card from './Card'
import parse from 'html-react-parser';

interface Props {
    myData : ProjectData
}

//sua glorificienza

export const ProjectMobile = ({myData} : Props) => {

    const style = {
        objectPosition: '100% ' + myData.heightPositionMobile + '%',
        height: '150px',
    };

    return (
    <>
        {/* mobile */}
        <div className='w-100 mb-4'>
            <a href={myData.url} target='_blank'>
                <h1 className='px-2 text-secondary'>{myData.name}</h1>
                <img src={"/src/img/" + myData.promoImg} className="crop-h w-100" alt="..." height="150px" style={style} />
                <div className='text-secondary w-100 p-2 fs-5'>
                    <div className='d-flex justify-content-between'>
                        <div className='align-bottom col'>by {myData.author}</div>
                        <div className='align-bottom col-3 text-end'>{myData.date}</div>
                    </div>
                </div>
            </a>
            {/* <p className='p-3 mb-5'>{parse(myData.description)}</p> */}
        </div>
    </>
    )
}