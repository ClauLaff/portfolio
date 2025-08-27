import './Formation.scss'
import Tag from '../Tag/Tag'

function Formation(props){
    return(
        <div>
           
            <div className="formation">
               <p>{props.title}</p>
               <p>{props.degree}</p>
               <p>{props.school}</p>
               <p>{props.year}</p>
               <p>{props.description}</p>
               {props.tags.map((tag, index)=>(
                <Tag key={index} text={tag}/>
               ))}
            </div> 
        </div>
    )
}
export default Formation