import {NavLink} from "react-router"
import './Header.scss'
import france from '/france.png'
import britain from '/britain.png'

function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="logo">C</NavLink>
      <div className = "languages"> 
        <button><img src={france} alt="français"/></button>
        <button><img src={britain} alt="english"/></button>
      </div>
    </div>
  )
}
export default Header