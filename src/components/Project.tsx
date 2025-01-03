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
        <h1>{myData.name}</h1>
        <a href={myData.url} target='_blank'>link</a>
    </>
    )
}