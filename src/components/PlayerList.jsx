import { useData } from '../hooks/data-hooks';
import SubSection from './SubSection';
import Player from './Player';

const PlayerList = () => {
    const { data : players } = useData();

    return (
        <SubSection className="current player-list">
            <table>
                <tbody>
                {
                    players.map(player => (
                        <Player key={`player-${player.id}`} {...player} />
                    ))
                }
                </tbody>
            </table>
        </SubSection>
    )
}

export default PlayerList;