import './Portfolio.scss'
import projets from '../../data/projets.json'
import {Link} from 'react-router'

function Portfolio(){
    return(
        <div className ="portfolio">
            {projets.map((projet)=>(
               <div className="project" key={projet.id} style={{backgroundImage:`url(${projet.cover})`}}>
                    <Link className="project-title" to={`/Projets/${projet.id}`}>{projet.title}</Link>
                </div> 
            ))}
            
        </div>
    )
}

export default Portfolio