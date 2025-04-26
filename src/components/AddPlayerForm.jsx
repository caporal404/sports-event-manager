/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import sportData from '../data/sport-data.json';
import { usePlayers } from '../hooks/player-hooks';
import SubSection from './SubSection';
import '../styles/PlayerForm.css';

const emptyPlayer = {
  id: '',
  name: '',
  age: '',
  sex: '',
  picture: '',
  sport: sportData[0].name, // Sport par défaut - Basketball
  role: sportData[0].roles[0],  // Poste par défaut - Meneur
  weight: '',
  height: '',
  speed: '',
  strength: '',
  endurance: ''
}

// eslint-disable-next-line no-unused-vars
const AddPlayerForm = ({ data, onAddPlayer }) => {
  const { setModifiedPlayer, modifiedPlayer, updatePlayer, addPlayer, returnFromPreviousSection } = usePlayers();
  
  const [playerData, setPlayerData] = useState(emptyPlayer);

  // Utilise les données du joueur que l'on souhaite modifier pour remplir le formulaire
  useEffect(() => {
    setPlayerData(modifiedPlayer || emptyPlayer)
  }, [modifiedPlayer])

   
  /*  Fonctions de validation du formulaire  */

  const handleChange = e => {
    const { name, value } = e.target;
    setPlayerData({
      ...playerData,
      [name]: value
    });
  };

  const handlePictureChange = e => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setPlayerData({
        ...playerData,
        picture: url
      })
    }
  }

  // Fonction pour récuperer les postes correspondant à un sport
  const getRoles = sportName => sportData.filter(sport => sport.name === sportName)[0].roles

  const [currentRoles, setCurrentRoles] = useState(getRoles(playerData.sport));
  const handleSportChange = e => {
    handleChange(e);
    let roles = getRoles(e.target.value);
    setCurrentRoles(roles);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (modifiedPlayer) {
      updatePlayer(playerData) // On modifie un joueur existant
      setModifiedPlayer(null);
    }
    else addPlayer(playerData); // On ajoute un nouveau joueur

    returnFromPreviousSection();
  };

  const handleReset = () => {
    setModifiedPlayer(null)
  }

  

  return (
    <SubSection className='player-form'>
      <form onSubmit={handleSubmit} onReset={handleReset} name='playerForm'>
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={playerData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="age">Âge:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={playerData.age}
            onChange={handleChange}
            min='16'
            max='99'
            required
          />

          <label htmlFor="">
              Sexe: 
              <input 
                type="radio" 
                name="sex" 
                id="male" 
                data-value='Masculin'
                onChange={e => setPlayerData({
                  ...playerData,
                  sex: e.target.dataset.value
                })}
                checked={playerData.sex === 'Masculin'}
              /> Masculin
              
              <input 
                type="radio" 
                name="sex" 
                id="female" 
                data-value='Feminin'
                onChange={e => setPlayerData({
                  ...playerData,
                  sex: e.target.dataset.value
                })}
                checked={playerData.sex === 'Feminin'}
              /> Feminin
          </label>

          <label htmlFor="picture">Photo: </label>
          <input 
            type="file" 
            accept="image/*"
            name="picture" 
            id="picture" 
            onChange={handlePictureChange}
            required
          />

          <label htmlFor="sport">Sport:</label>
          <select
            id="sport"
            name="sport"
            value={playerData.sport}
            onChange={handleSportChange}
          >
          {
            sportData.map(sport => (
              <option key={sport.name.toLowerCase()} value={sport.name}>{sport.name}</option>
            ))
          }
          </select>

          <label htmlFor="role">Poste:</label>
          <select
            id="role"
            name="role"
            value={playerData.role}
            onChange={handleChange}
          >
          {
            currentRoles.map(role => (
              <option key={role.toLowerCase()} value={role}>{role}</option>
            ))
          }
          </select>

          <label htmlFor="weight">Poids (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={playerData.weight}
            onChange={handleChange}
            required
          />

          <label htmlFor="height">Taille (cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={playerData.height}
            onChange={handleChange}
            required
          />

          <label htmlFor="speed">Vitesse (m/s):</label>
          <input
            type="number"
            id="speed"
            name="speed"
            value={playerData.speed}
            onChange={handleChange}
            required
          />

          <label htmlFor="strength">Force (N):</label>
          <input
            type="number"
            id="strength"
            name="strength"
            value={playerData.strength}
            onChange={handleChange}
            required
          />

          <label htmlFor="endurance">Endurance (VO<sub>2</sub>):</label>
          <input
            type="number"
            id="endurance"
            name="endurance"
            value={playerData.endurance}
            onChange={handleChange}
            required
          />

          <div className="controls">
              <button type="submit">Enregistrer</button>
              <button type="reset">Effacer</button>
          </div>
      </form>
    </SubSection>
  );
};

export default AddPlayerForm;