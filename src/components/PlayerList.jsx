import {} from 'react';
import { usePlayers } from '../hooks/player-hooks';
import SubSection from './SubSection';
import Player from './Player';

const PlayerList = () => {
    const { players } = usePlayers();

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