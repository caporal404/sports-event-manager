import DataProvider from '../hooks/data-hooks';
import Section from './Section'
import AddTeamForm from './AddTeamForm';
import TeamList from './TeamList';

const TeamSection = () => {
  return (
    <DataProvider name='teams'>
      <Section className='team-section'>
        <TeamList />
        <AddTeamForm />
      </Section>
    </DataProvider>
  )
}

export default TeamSection;