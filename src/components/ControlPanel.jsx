import { useRef } from 'react';
import '../styles/ControlPanel.css';

const ControlPanel = () => {
    const controlPanel = useRef();
    const togglePanel = () => controlPanel.current.classList.toggle('hide');

    return (
        <section className="control-panel" ref={controlPanel}>
            <div className="hide-panel icon" onClick={togglePanel}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
            <div className="show-panel icon" onClick={togglePanel}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
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