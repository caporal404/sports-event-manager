import '../styles/ControlPanel.css';

const ControlPanel = () => {
    return (
        <nav className="control-panel">
            <ul>
                <li className="home">
                    <a href="">Home</a>
                </li>
                <li className="event-details">
                    <a href="">Évènements</a>
                </li>
                <li className="team-details">
                    <a href="">Équipes</a>
                </li>
                <li className="player-details">
                    <a href="">Joueurs</a>
                </li>
            </ul>
        </nav>
    );
}

export default ControlPanel;