import DataProvider from '../hooks/data-hooks';
import Section from './Section'
import AddEventForm from './AddEventForm';
import EventList from './EventList';


const EventSection = () => {
  return (
    <DataProvider name='events'>
      <Section className='event-section'>
        <EventList />
        <AddEventForm />
      </Section>
    </DataProvider>
  )
}

export default EventSection;