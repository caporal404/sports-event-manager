import { useData } from '../hooks/data-hooks';
import SubSection from './SubSection';
import Player from './Player';

const PlayerList = () => {
    const { data : players } = useData();

    return (
        <SubSection className="current player-list">
            {(!players || !players.length) ?
            <div className="no-players">Aucun joueur disponible</div> :
            <table>
                <thead>
                    <th className="">Image</th>
                    <th className="">Nom</th>
                    <th className="">Age</th>
                    <th className="">Sexe</th>
                    <th className="">Sport</th>
                    <th className="">Poste</th>
                    <th className="">Statistiques</th>
                    <th className="">Actions</th>
                </thead>
                <tbody>
                {
                    players.map(player => (
                        <Player key={`player-${player.id}`} {...player} />
                    ))
                }
                </tbody>
            </table>}
        </SubSection>
    )
}

export default PlayerList;