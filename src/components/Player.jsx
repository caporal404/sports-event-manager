/* eslint-disable react/prop-types */
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip } from 'recharts'
import { useData } from '../hooks/data-hooks';
import '../styles/Player.css';

const Player = ({ id, picture, weight, height, speed, strength, endurance, ...data }) => {
  const { 
    setModified : setModifiedPlayer, 
    remove : removePlayer, 
    goToNextSection 
  } = useData();

  const MAX_VALUES = {
    weight: 100, 
    height: 220, 
    speed: 30, 
    strength: 100, 
    endurance: 500
  };

  const stats = [
    { stat: 'Weight', value: weight + ' Kg', percent: (weight / MAX_VALUES.weight) * 100 },
    { stat: 'Height', value: height + ' cm', percent: (height / MAX_VALUES.height) * 100 },
    { stat: 'Speed', value: speed + ' m/s', percent: (speed / MAX_VALUES.speed) * 100 },
    { stat: 'Strength', value: strength + ' N', percent: (strength / MAX_VALUES.strength) * 100 },
    { stat: 'Endurance', value: endurance + ' VO', percent: (endurance / MAX_VALUES.endurance) * 100 },
  ]


  return (
    <tr className="player">
      <td className='id'>{id}</td>
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
          width={280}
          height={160}
          data={stats}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey='stat' />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar 
            name='Valeur'
            dataKey="percent"
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
          />
          <Tooltip formatter={(value, name, props) => props.payload.value}/>
        </RadarChart>
      </td>
      <td className="actions">
        <button className="" onClick={() => {
          setModifiedPlayer({ id, picture, weight, height, speed, strength, endurance, ...data });
          goToNextSection();
        }}>Modifier</button>
        <button className="" onClick={() => removePlayer(data.id)}>Supprimer</button>
      </td>
    </tr>
  )
}

export default Player;