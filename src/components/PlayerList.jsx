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
                    players.map((player, index) => (
                        <Player key={`player-${index}`} {...player} />
                    ))
                }
                </tbody>
            </table>
        </SubSection>
    )
}

export default PlayerList;