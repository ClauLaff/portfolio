import './Projet.scss'
import Tag from '../Tag/Tag'

function Projet (props){
   
    return(
        <div className="project">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
            <div className="tags"> 
                {props.tags.map((tag, index)=>(
                    <Tag key={index} text={tag}/>
                ))}
            </div>
            <p className="description">{props.description}</p>
            <div className = "video">
                <video controls width = "650">
                    <source src={props.video} type="video/mp4"/>
                    Votre navigateur ne supporte pas la lecture vidéo.
                </video>
            </div>
            <a className="gitHubLink" href={props.gitHubLink} target="_blank" rel="noopener noreferrer">Repository GitHub</a>
        </div>

    )
}
export default Projet