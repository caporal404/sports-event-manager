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
                <Link to='/'>Accueil</Link>
                <Link to='/events'>Évènements</Link>
                <Link to='/teams'>Équipes</Link>
                <Link to='/players'>Joueurs</Link>
            </nav>
        </section>
    );
}

export default ControlPanel;