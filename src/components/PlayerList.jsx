import {} from 'react';
import { usePlayers } from '../hooks/player-hooks';
import SubSection from './SubSection';
import Player from './Player';

const PlayerList = () => {
    const { players } = usePlayers();

    return (
        <SubSection className="player-list">
            <table>
            {
                players.map((player, index) => (
                    <Player key={`player-${index}`} {...player} />
                ))
            }
            </table>
        </SubSection>
    )
}

export default PlayerList;