import DataProvider from "../hooks/data-hooks";
import Section from "./Section";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";

const PlayerSection = () => {
    return (
        <DataProvider name='players'>
            <Section className="player-section">
                <PlayerList />
                <AddPlayerForm />
            </Section>
        </DataProvider>
    )
}

export default PlayerSection;