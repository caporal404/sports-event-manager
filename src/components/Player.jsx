/* eslint-disable react/prop-types */
import {} from 'react';
import '../styles/Player.css';

const Player = ({ picture, ...data }) => {
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
        <button className="">Modifier</button>
        <button className="">Supprimer</button>
      </td>
    </tr>
  )
}

export default Player;