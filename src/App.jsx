import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Projets from "./pages/Projets/Projets";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App(){
    const [language, setLanguage]=useState('fr')
    return(
        <div>
            <Header language={language} setLanguage={setLanguage}/>
            <Routes>
                <Route path = "/" element = {<Home language={language} setLanguage={setLanguage}/>}/>
                <Route path = "/Projets/:id" element = {<Projets language={language} setLanguage={setLanguage}/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App