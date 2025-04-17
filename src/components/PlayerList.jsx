import {} from 'react';
import { usePlayers } from '../hooks/player-hooks';
import SubSection from './SubSection';
import Player from './Player';

const PlayerList = () => {
    const { players } = usePlayers();

    return (
        <SubSection className="player-list">
        {
            players.map((player, index) => (
                <Player key={`player-${index}`} {...player} />
            ))
        }
        </SubSection>
    )
}

export default PlayerList;