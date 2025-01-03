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

export const Project = ({myData} : Props) => {
    return (
    <>
        <img src={'/src/img/' + myData.promoImg} alt="..." className='w-100'/>
        <div className='p-2'>
            <h1>{myData.name}</h1>
            <p>{parse(myData.description)}</p>
            <a href={myData.url_itch} target='_blank'>link</a>
        </div>
    </>
    )
}