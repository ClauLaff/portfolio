import {NavLink} from "react-router"
import './Header.scss'

function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="logo">C</NavLink>
      <div className = "languages"> 
        <button><img src="/src/assets/france.png" alt="français"/></button>
        <button><img src="/src/assets/britain.png" alt="english"/></button>
        <a href="https://www.linkedin.com/in/claudia-laffargue-833a2943" target="_blank" rel="noopener noreferrer">in</a>
      </div>
    </div>
  )
}
export default Header