/* eslint-disable react/prop-types */
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts'
import { usePlayers } from '../hooks/player-hooks';
import '../styles/Player.css';

const Player = ({ picture, weight, height, speed, strength, endurance, ...data }) => {
  const { setModifiedPlayer, removePlayer, goToNextSection } = usePlayers();

  const stats = [
    { stat: 'Weight', value: weight, fullMark: 100 },
    { stat: 'Height', value: height, fullMark: 220 },
    { stat: 'Speed', value: speed, fullMark: 30 },
    { stat: 'Strength', value: strength, fullMark: 100 },
    { stat: 'Endurance', value: endurance, fullMark: 700 },
  ]


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
      <td className="stats">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          width={100}
          height={100}
          data={stats}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey='stat' />
          <PolarRadiusAxis />
          <Radar 
            name='Performance du joueur'
            dataKey="value"
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
          />
          <Tooltip />
        </RadarChart>
      </td>
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