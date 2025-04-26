import { useRef } from 'react';
import '../styles/ControlPanel.css';

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
                <ul>
                    <li className="home">
                        <a href="#">Accueil</a>
                    </li>
                    <li className="event-details">
                        <a href="#">Évènements</a>
                    </li>
                    <li className="team-details">
                        <a href="#">Équipes</a>
                    </li>
                    <li className="player-details">
                        <a href="#">Joueurs</a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default ControlPanel;