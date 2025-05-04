/* eslint-disable no-unused-vars */
import '../styles/EventList.css';
import { useData } from '../hooks/data-hooks'
import SubSection from './SubSection';

const EventList = () => {
    const { data: events } = useData();

    if(!events || !events.length) 
        return <div className="no-events">Aucun évènement disponible</div>

    return (
        <SubSection className='current event-list'>
          {events.map(event => (
            <Event key={`event-${event.id}`} {...event} />
          ))}             
        </SubSection>
    )
}

const Event = ({ ...event }) => {
    const {
        setModified : setModifiedEvent,
        remove : removeEvent,
        goToNextSection
    } = useData();

    return (
        <div className="event">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="name w-100" title={event.name}>{event.name}</h3>
                <span className="type">{event.type}</span>
            </div>
            <h6 className="description" title={event.description}>{event.description}</h6>
            <div className="d-flex justify-content-between">
                <p className="place mb-0 d-flex align-items-center">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{event.place}</span>
                </p>
                <p className="date mb-0 d-flex align-items-center">
                    <i className="far fa-calendar-alt"></i>
                    <span>{event.date}</span>
                </p>
                <p className="time mb-0 d-flex align-items-center">
                    <i className="fas fa-clock"></i>
                    <span>{event.time}</span>
                </p>
            </div>
            {/* <div className="actions">
                <button className="btn btn-primary" onClick={() => {
                    setModifiedEvent(null);
                    setModifiedEvent(event);
                    // goToNextSection();
                }}>Modifier</button>
                <button className="btn btn-secondary" onClick={() => removeEvent(event.id)}>Supprimer</button>
            </div> */}
        </div>
    )
}

export default EventList;