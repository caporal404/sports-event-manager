import { useState } from 'react';
import sportData from '../data/sport-data.json';

const AddPlayerForm = () => {
  const [playerData, setPlayerData] = useState({
    name: '',
    age: '',
    sex: 'Masculin',
    picture: '',
    sport: sportData[0].name,
    role: sportData[0].roles[0],
    weight: '',
    height: '',
    speed: '',
    strength: '',
    endurance: ''
  });


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

  const [ currentRoles, setCurrentRoles] = useState([]);
  const handleSportChange = e => {
    handleChange(e);
    let currentSport = e.target.value;
    let roles = sportData.filter(sport => sport.name === currentSport)[0].roles;
    setCurrentRoles(roles);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Player Data:', playerData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: '350px', 
        margin: '0 auto',
        gap: '10px'
    }}>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Âge:</label>
        <input
          type="number"
          id="age"
          name="age"
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
              onChange={() => setPlayerData({
                ...playerData,
                sex: 'Masculin'
              })}
            /> Masculin
            
            <input 
              type="radio" 
              name="sex" 
              id="female" 
              onChange={() => setPlayerData({
                ...playerData,
                sex: 'Feminin'
              })}
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
          onChange={handleChange}
          required
        />

        <label htmlFor="height">Taille (cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          onChange={handleChange}
          required
        />

        <label htmlFor="speed">Vitesse (m/s):</label>
        <input
          type="number"
          id="speed"
          name="speed"
          onChange={handleChange}
          required
        />

        <label htmlFor="strength">Force (kg):</label>
        <input
          type="number"
          id="strength"
          name="strength"
          onChange={handleChange}
          required
        />

        <label htmlFor="endurance">Endurance (VO<sub>2</sub>):</label>
        <input
          type="number"
          id="endurance"
          name="endurance"
          onChange={handleChange}
          required
        />

        <div className="controls">
            <button type="submit">Enregistrer</button>
            <button type="reset">Effacer</button>
        </div>
    </form>
  );
};

export default AddPlayerForm;