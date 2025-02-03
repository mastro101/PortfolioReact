import { ReactNode } from 'react'
import './Mastro.css'
import { ProjectData } from '../interfaces/ProjectsData'
import { data, Link } from 'react-router'
import Card from './Card'
import parse from 'html-react-parser';
import { CIcon } from '@coreui/icons-react';
import { cilList, cibItchIo, cibSteam } from '@coreui/icons';

interface Props {
    myData : ProjectData
}

//sua glorificienza

export const ProjectMobile = ({myData} : Props) => {

    const itchIcon = <CIcon icon={cibItchIo} size="xxl"/>
    const steamIcon = <CIcon icon={cibSteam} size="xxl"/>
    const ggjIcon = <img className="icon m-0" src="https://globalgamejam.org/themes/custom/ggj_v4/logo.svg" style={{height:"1.5rem", width:"2.5rem"}}/>
    const style = {
        objectPosition: '100% ' + myData.heightPositionMobile + '%',
        height: '150px',
    };

    return (
    <>
        {/* mobile */}
        <div className='w-100 mb-4'>
            <a href={myData.url} target='_blank'>
                <h1 className='px-2'>{myData.name}</h1>
                <img src={window.location.origin + "/mastrofolio/img/" + myData.promoImg} className="crop-h w-100" alt="..." height="150px" style={style} />
                <div className='w-100 p-2 fs-5'>
                    <div className='text-secondary d-flex justify-content-between'>
                        <div className='align-bottom col'>by {myData.author}</div>
                        <div className='align-bottom col-3 text-end'>{myData.date}</div>
                    </div>
                    <div className='mt-2'>
                        {myData.steam ? steamIcon : null} {myData.itch ? itchIcon : null} {myData.ggj ? ggjIcon : null}
                    </div>
                </div>
            </a>
            {/* <p className='p-3 mb-5'>{parse(myData.description)}</p> */}
        </div>
    </>
    )
}