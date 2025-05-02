/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../styles/TeamList.css';
import { useData } from '../hooks/data-hooks'
import SubSection from './SubSection';
import ThumbList from './ThumbList';

const TeamList = () => {
    const { data: teams } = useData();
    if(!teams || !teams.length) 
        return <div className="no-teams">Aucune équipe disponible</div>
  return (
    <SubSection className='current team-list'>
        <table>
            <thead></thead>
            <tbody>
                {
                    teams.map(team => (
                        <Team key={`team-${team.id}`} {...team} />
                    ))
                }
            </tbody>
        </table>
    </SubSection>
  )
}

const Team = ({ picture, players, ...team}) => {
    const {
        setModified : setModifiedTeam,
        remove : removeTeam,
        goToNextSection
    } = useData();

    return (
        <tr className="team">
            <td className="picture">
                <img src={picture} alt={`Équipe: ${team.name}`} />
            </td>
            {
                Object.entries(team).map(([key, value]) => (
                    (key !== 'key' && key !== 'id') &&
                    <td key={`team-${key}`} className={key}>{value}</td>
                ))
            }
            <td className="players">
                <ThumbList 
                    data={players} 
                    isItemRemovable={false}
                />
            </td>
            <td className="actions">
                <button className="" onClick={() => {
                    setModifiedTeam(null);
                    setModifiedTeam({ picture, players, ...team });
                    // goToNextSection();
                }}>Modifier</button>
                <button className="" onClick={() => removeTeam(team.id)}>Supprimer</button>
            </td>
        </tr>
    )
}

export default TeamList