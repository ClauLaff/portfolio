import {NavLink} from "react-router"
import './Header.scss'

function Header(props) {
  const setLanguage=props.setLanguage;

  return (
    <div className="header">
      <NavLink to="/" className="logo">C</NavLink>
      <div className = "languages"> 
            <button onClick={()=>setLanguage('fr')}><img src="/portfolio/france.webp" alt="français"/></button>
            <button onClick={()=>setLanguage('eng')}><img src="/portfolio/britain.webp" alt="english"/></button>
        </div>
    </div>
  )
}
export default Header