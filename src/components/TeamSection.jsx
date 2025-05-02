import Section from './Section'
import AddTeamForm from './AddTeamForm';
import TeamList from './TeamList';

const TeamSection = () => {
  return (
    <Section className='team-section'>
      <TeamList />
      <AddTeamForm />
    </Section>
  )
}

export default TeamSection;