import './Portfolio.scss'
import projets from '../../data/projets.json'
import {Link} from 'react-router'

function Portfolio(){
    return(
        <div className ="portfolio">
            {projets.map((projet)=>(
               <Link className="project-link" key={projet.id} to={`/Projets/${projet.id}`}>
                <div className="project" style={{backgroundImage:`url(${projet.cover})`}}>
                    <p className="project-title">{projet.title}</p>
                </div>
            </Link>
            ))}
            
        </div>
    )
}

export default Portfolio