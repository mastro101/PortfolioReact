import ReactDOM from 'react-dom/client'
import App from './App'
import Header from './components/Header'
import ImagePopUp from './components/ImagePopUp'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './components/Mastro.css'
import CardGroup from './components/CardGroups'
import Contacts from './components/Contacts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Header>Matteo Mastropasqua</Header>
    <NavBar></NavBar>
    <div className='d-flex justify-content-center'>
      <div className='w-lg-75 w-sm-100'>
          <Routes>
            <Route index element={<CardGroup/>}/>
            <Route path='Projects' element={<Projects/>}/>
            <Route path="AboutMe" element={<AboutMe/>}/>
            <Route path="Contacts" element={<Contacts />}/>
            <Route Component={CardGroup} />
          </Routes>
      </div>
    </div>
  </HashRouter>,
)