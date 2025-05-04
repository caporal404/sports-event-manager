import { useRef } from 'react';
import '../styles/ControlPanel.css';
import { Link } from 'react-router-dom';

const ControlPanel = () => {
    const controlPanel = useRef();
    const togglePanel = () => controlPanel.current.classList.toggle('hide');

    return (
        <section className="control-panel" ref={controlPanel}>
            <div className="hide-panel icon" onClick={togglePanel}>
                <i className="fas fa-times"></i>
            </div>
            <div className="show-panel icon" onClick={togglePanel}>
                <i className="fas fa-bars"></i>
            </div>
            <nav>
                <Link to='/home'><i className="fas fa-house" />Accueil</Link>
                <Link to='/dashboard/events'><i className="fas fa-calendar-days" />Évènements</Link>
                <Link to='/dashboard/teams'><i className="fas fa-people-group" />Équipes</Link>
                <Link to='/dashboard/players'><i className="fas fa-person" />Joueurs</Link>
            </nav>
        </section>
    );
}

export default ControlPanel;