import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router'
import './styles/main.scss'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Projets from './pages/Projets/Projets.jsx'
import Footer from './components/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Projets/:id" element = {<Projets/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
)
