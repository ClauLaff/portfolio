import './Projets.scss'
import projets from '../../data/projets.json'
import Projet from '../../components/Projet/Projet'
import { useNavigate, useParams } from 'react-router'

function Projets(){
    const {id}= useParams();
    const projet = projets.find((projet)=>projet.id === (id));

    return(
        <main>
            <Projet className="project" key={projet.id} title={projet.title} 
            subtitle={projet.subtitle} tags={projet.tags} description={projet.description} 
            video={projet.video} gitHubLink={projet.gitHubLink}/>
        </main>
    )
}
export default Projets