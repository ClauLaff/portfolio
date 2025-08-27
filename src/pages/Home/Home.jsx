import './Home.scss'
import Portfolio from '../../components/Portfolio/Portfolio'
import Tag from '../../components/Tag/Tag'

function  Home(){
  return(
    <main>
      <div className="main">
        <section>
          <div className="about">
            <div className="photo"> 
              <img src="/src/assets/photo.jpg" alt=" Photo"/>
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
            <div className="formation">
               <p>Développeur Web</p>
               <p>OpenClassrooms</p>
               <Tag text="Javascript"/><Tag text="HTML"/><Tag text="CSS"/><Tag text="React.js"/>
               <Tag text="API REST Express"/><Tag text="Git & GitHub"/><Tag text="Optimisation"/><Tag text=" Gestion de projet Agile"/>
            </div>
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
