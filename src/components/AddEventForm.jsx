/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import '../styles/EventForm.css';
import eventData from '../data/event-data.json';
import sportData from '../data/sport-data.json';
import useLocalStorage from '../hooks/useLocalStorage';
import { useData } from '../hooks/data-hooks';
import SubSection from './SubSection';
import ThumbList from './ThumbList';
import List from './List';

const emptyEvent = {
  id: '',
  name: '',
  type: eventData[0].name, // Évènement par défaut - Match
  sport: sportData[0].name, // Sport par défaut - Basketball
  participants: [],
  place: '',
  date: '',
  time: '',
  description: ''
};

const AddEventForm = () => {
  // On récupère les joueurs et les équipes enregistrées
  const { savedData : teams } = useLocalStorage('teams');
  const { savedData : players } = useLocalStorage('players');

  const [event, setEvent] = useState(emptyEvent);
  const [participants, setParticipants] = useState([]); // participants: [teams] || [players]
  const [eventParticipants, setEventParticipants] = useState([]);

  // Pour afficher et cacher la liste simplfiée des participants (équipes ou joueurs)
  const [showList, setShowList] = useState(false);

  // On recupere les fonctions globales du localStorage
  const { 
    modified: modifiedEvent, 
    setModified: setModifiedEvent, 
    add: addEvent, 
    update: updateEvent, 
    returnFromPreviousSection 
  } = useData();

  useEffect(() => {
    setEvent(modifiedEvent || emptyEvent);
  }, [modifiedEvent]);

  // On définit les participants en fonction du type d'évènement ('teams' ou 'players')
  useEffect(() => {
    const participantType = eventData.filter(({ name }) => name === event.type)[0].participants.type;
    const participant = participantType == 'teams' ? teams : players;
    setParticipants(JSON.parse(JSON.stringify(participant)));  // On copie l'ojet en profondeur
  }, [event.type]);

  // Si le type d'évènements change on reinitialise la liste des participants
  useEffect(() => {
    setEventParticipants([]);
  }, [event.type])

  const addParticipantToEvent = participant => {
    setEventParticipants([...eventParticipants, participant]);
    setParticipants(participants.filter(({ id }) => id !== participant.id));
  }

  const removeParticipantToEvent = participant => {
    setEventParticipants(eventParticipants.filter(({ id }) => id !== participant.id));
    setParticipants([...participants, participant]);
  }
  

  const handleChange = e => {
    const { name, value } = e.target;
    setEvent({
      ...event,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (modifiedEvent) {
      updateEvent(event);
    } 
    else {
      event.participants = eventParticipants;
      addEvent(event);
      e.target.reset();
    }

    // returnFromPreviousSection();
  };

  const handleReset = () => {
    setModifiedEvent(null);
  };

  return (
    <SubSection className="event-form">
      <form onSubmit={handleSubmit} onReset={handleReset} className="needs-validation">
        <div className="mb-3">
          <label htmlFor="event-name" className="form-label">Nom:</label>
          <input
            type="text" 
            name="name" 
            id="event-name"
            className="form-control"
            value={event.name} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="team-sport" className="form-label">Type:</label>
          <select
            id="event-type"
            name="type"
            className="form-select"
            value={event.type}
            onChange={handleChange}
            required
          >
            {eventData.map(({ name }) => (
              <option key={`event-${name.toLowerCase()}`} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="event-sport" className="form-label">Sport:</label>
          <select
            id="event-sport"
            name="sport"
            className="form-select"
            value={event.sport}
            onChange={handleChange}
            required
          >
            {sportData.map(({ name }) => (
              <option key={`event-sport-${name.toLowerCase()}`} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="event-participants mb-3">
          <label className="form-label">Participants: </label>

          <ThumbList
            id='thumb-participants' 
            data={eventParticipants} 
            onRemoveItem={removeParticipantToEvent} 
          />

          <div className="participant-list-container">
            {
              showList && 
              <List
                id='participant-list' 
                data={participants.filter(({ sport }) => sport === event.sport)} 
                onSelectItem={participant => {
                  addParticipantToEvent(participant);
                  setShowList(false);
                }} 
              />
            }

            <button className='show-participant-list btn btn-primary' onClick={e => {
              e.preventDefault();
              setShowList(!showList);
            }}>
              <i className="fas fa-plus" />
            </button>
          </div>
         
        </div>

        <div className="mb-3">
          <label htmlFor="event-place" className="form-label">Lieu:</label>
          <input 
            type="text" 
            name="ciplacety" 
            id="event-place"
            className="form-control"
            value={event.place} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="event-date" className="form-label">Dâte:</label>
          <input 
            type="date" 
            name="date" 
            id="event-date"
            className="form-control"
            value={event.date} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="event-time" className="form-label">Heure:</label>
          <input 
            type="time" 
            name="time" 
            id="event-time"
            className="form-control"
            value={event.time} 
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="event-description" className="form-label">Description:</label>
          <textarea 
            name="description" 
            id="event-description"
            className="form-control"
            value={event.description} 
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

export default AddEventForm;