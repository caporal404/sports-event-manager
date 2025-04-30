/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { v4 } from 'uuid';
import '../styles/TeamForm.css';
import sportData from '../data/sport-data.json';
import playerData from '../data/player-data.json';
import useLocalStorage from '../hooks/useLocalStorage';
import { useData } from '../hooks/data-hooks';
import SubSection from './SubSection';
import ThumbList from './Thumbnail';
import List from './List';

const emptyTeam = {
  id: '',
  name: '',
  sport: sportData[0].name, // Sport par défaut - Basketball
  players: [],
  city: '',
  coach: '',
  founded: '',
  description: ''
};

const AddTeamForm = () => {
  const { getSaved } = useLocalStorage('players');
  const [teamData, setTeamData] = useState(emptyTeam);
  const [players, setPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);

  const { 
    modified: modifiedTeam, 
    setModified: setModifiedTeam, 
    add: addTeam, 
    update: updateTeam, 
    returnFromPreviousSection 
  } = useData();

  useEffect(() => {
    setTeamData(modifiedTeam || emptyTeam);
  }, [modifiedTeam]);

  // On recupere la liste des joueurs du LocalStorage
  useEffect(() => {
    // setPlayers(getSaved());
    setPlayers(playerData);
  }, []);

  const addPlayerToTeam = player => {
    // On ajoute les joueur à l'équipe
    setTeamPlayers([...teamPlayers, player]);
    // On supprime le joueur de la liste
    setPlayers(players.filter(({ id }) => id !== player.id));
  }

  const removePlayerToTeam = player => {
    setTeamPlayers(teamPlayers.filter(({ id }) => id !== player.id));
    setPlayers([...players, player]);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setTeamData({
      ...teamData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (modifiedTeam) {
      updateTeam(teamData);
    } else {
      teamData.id = v4();
      teamData.players = teamPlayers;
      addTeam(teamData);
    }
    returnFromPreviousSection();
  };

  const handleReset = () => {
    setModifiedTeam(null);
    setTeamData(emptyTeam);
  };

  return (
    <SubSection className="team-form">
      <form onSubmit={handleSubmit} onReset={handleReset} className="needs-validation">
        <div className="mb-3">
          <label htmlFor="team-name" className="form-label">Nom:</label>
          <input 
            type="text" 
            name="name" 
            id="team-name"
            className="form-control"
            value={teamData.name} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="team-sport" className="form-label">Sport:</label>
          <select
            id="team-sport"
            name="sport"
            className="form-select"
            value={teamData.sport}
            onChange={handleChange}
            required
          >
            {sportData.map(sport => (
              <option key={sport.name.toLowerCase()} value={sport.name}>{sport.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="">Joueurs: </label>

          <ThumbList
            id='team-players' 
            data={teamPlayers} 
            onRemoveItem={removePlayerToTeam} 
          />

          <List
            id='player-list' 
            data={players.filter(({ sport }) => sport !== teamData.sport)} 
            onSelectItem={addPlayerToTeam} 
          />

          <button className='btn btn-primary'>
            <i className="fas fa-plus" />
          </button>
        </div>

        <div className="mb-3">
          <label htmlFor="team-city" className="form-label">Ville:</label>
          <input 
            type="text" 
            name="city" 
            id="team-city"
            className="form-control"
            value={teamData.city} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="team-coach" className="form-label">Entraîneur:</label>
          <input 
            type="text" 
            name="coach" 
            id="team-coach"
            className="form-control"
            value={teamData.coach} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="team-founded" className="form-label">Année de Fondation:</label>
          <input 
            type="number" 
            name="founded" 
            id="team-founded"
            className="form-control"
            value={teamData.founded} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="team-description" className="form-label">Description:</label>
          <textarea 
            name="description" 
            id="team-description"
            className="form-control"
            value={teamData.description} 
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Enregistrer</button>
          <button type="reset" className="btn btn-secondary">Réinitialiser</button>
        </div>
      </form>
    </SubSection>
  );
};

export default AddTeamForm;