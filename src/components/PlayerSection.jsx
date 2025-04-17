/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useViews } from "../hooks/view-hooks"
import Section from "./Section";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";

const PlayerSection = () => {
    const { showPlayerSection } = useViews();
    const [showPlayerList, setShowPlayerList] = useState(true);
    const [showAddPlayerForm, setShowAddPlayerForm] = useState(true);

    const showForm = () => {
        setShowAddPlayerForm(true);
        setShowPlayerList(false);
    }

    const showList = () => {
        setShowPlayerList(true);
        setShowAddPlayerForm(false);
    }
    
    if (!showPlayerSection) return null;
    return (
        <Section className="player-section">
            {showPlayerList && <PlayerList/>}
            {showAddPlayerForm && <AddPlayerForm onAddPlayer={showList} />}
        </Section>
    )
}

export default PlayerSection;