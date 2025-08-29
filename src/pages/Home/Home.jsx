import './Home.scss'
import Portfolio from '../../components/Portfolio/Portfolio'
import formations from '../../data/formations.json'
import Formation from '../../components/Formation/Formation'
import photo from '/photo.jpg'

function  Home(){
  return(
    <main>
      <div className="main">
        <section>
          <div className="about">
            <div className="photo"> 
              <img src={photo} alt=" Photo"/>
            </div>
            <p className="description">En reconversion professionelle, j'ai acquis de solides bases en programmation web et je continue de découvrir ce métier avec grand intérêt. 
              Ma grande passion: apprendre. D'un esprit à la fois scientifique et artiste, j'ai commencé mes études en étudiant la musique au conservatoire, puis j'ai poursuivi des études de philosophie à la Sorbonne. 
              Méticuleuse, j'aime le travail bien fait. 
            </p>
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
