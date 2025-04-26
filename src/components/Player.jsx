/* eslint-disable react/prop-types */
import {} from 'recharts'
import { usePlayers } from '../hooks/player-hooks';
import '../styles/Player.css';

const Player = ({ picture, ...data }) => {
  const { setModifiedPlayer, removePlayer, goToNextSection } = usePlayers();

  return (
    <tr className="player">
      <td className='picture'>
        <img src={picture} alt="Photo du joueur" />
      </td>
      {
        Object.entries(data).map(([param, value]) => (
          <td key={param} className={param}>{value}</td>
        ))
      }
      <td className="actions">
        <button className="" onClick={() => {
          setModifiedPlayer({ picture, ...data });
          goToNextSection();
        }}>Modifier</button>
        <button className="" onClick={() => removePlayer(data.id)}>Supprimer</button>
      </td>
    </tr>
  )
}

export default Player;