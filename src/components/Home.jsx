import {} from 'react'
import '../styles/Home.css'
import Header from './Header';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to='/dashboard/events'><i className="fas fa-calendar-days" />Évènements</Link>
          <Link to='/dashboard/teams'><i className="fas fa-people-group" />Équipes</Link>
          <Link to='/dashboard/players'><i className="fas fa-person" />Joueurs</Link>
        </nav>
      </Header>
      <main>
        <section className="banner">
          <h2>Votre solution complète pour la gestion d&apos;évènements sportifs en équipe</h2>
          <h4>Planifiez, organisez et suivez vos compétitions avec éfficacité et précision</h4>
          <button className='btn'>
            <Link to='/dashboard/events'>Créer votre évènement</Link>
          </button>
        </section>
      </main>
      <footer>
        <p className='copyrights'>&copy; copyrights 2025 | kevin-code</p>
        <p className="social-links">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </p>
      </footer>
    </>
  )
}

export default Home