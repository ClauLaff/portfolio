import './Home.scss'
import Portfolio from '../../components/Portfolio/Portfolio'
import formations from '../../data/formations.json'
import Formation from '../../components/Formation/Formation'

function  Home(props){

  return(
    <main>
      <div className="main">
        <section>
          <div className="about">
            <div className="photo"> 
              <img src="/portfolio/photo.webp" alt=" Photo"/>
            </div>
            {props.language === 'fr'?(
              <p className="description">En reconversion professionelle, j'ai acquis de solides bases en programmation web et je continue de découvrir ce métier avec grand intérêt. <br/>
               Méticuleuse et appliquée j'aime le travail bien fait. Ma grande passion: apprendre. <br/>
               D'un esprit à la fois scientifique et artiste, j'ai débuté par l'étude du piano au conservatoire, puis j'ai poursuivi des études de philosophie des sciences à la Sorbonne, avant d'entreprendre plusieurs formations en informatique. <br/>
               Je suis par ailleurs devenue bilingue en anglais de part de nombreux séjours en Angleterre. <br/>
               Je souhaite ainsi poursuivre une carrière en informatique tout en continuant à me former et monter en compétences. 
              
            </p>
            ):(
              <p className="description"> After undertaking a career change and retraining in IT, I've gained good skills in web development and I keep learning about this profession with a keen interest. <br/>
                I am meticulous and careful in my work, and I like to get the job right. Learning is my passion. <br/>
                With aptitudes for both science and arts, I started out practicing the piano in music academy, then went on studying philosophy of science at Sorbonne university, and finally undertook several courses in IT. <br/>
                I also became fluent in english while taking numerous trips to England. <br/>
                I'm pursuing a career in IT and keep training to develop more skills. 
              </p>
            )}
          </div>
        </section>
        <section>
          <div>
            <h1>Formation</h1>
              {formations.map((formation)=>(
                <Formation className="formation" key={formation.id} title={formation.title} degree={formation.degree} 
                school={formation.school} year={formation.year} description={formation.description} tags={formation.tags}/> 
              ))}
          </div>
        </section>
        <section>
          <Portfolio/>
        </section>
      </div>
    </main>
  )
}

export default Home
