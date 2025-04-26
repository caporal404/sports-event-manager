import Section from "./Section";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";

const PlayerSection = () => {
    return (
        <Section className="player-section">
            <PlayerList />
            <AddPlayerForm />
        </Section>
    )
}

export default PlayerSection;