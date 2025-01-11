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
        <div className='d-flex justify-content-center mb-3'>
            <img src={'/src/img/' + myData.promoImg} alt="..." className='w-75'/>
        </div>
        <div className='p-2'>
            <h1>{myData.name}</h1>
            <p>{parse(myData.description)}</p>
            <a href={myData.url} target='_blank'>link</a>
        </div>
    </>
    )
}