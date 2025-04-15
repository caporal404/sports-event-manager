/* eslint-disable react/prop-types */
import { useViews } from "../hooks/view-hooks"

const PlayerSection = ({ children }) => {
    const { showPlayerSection } = useViews();
    
    if (!showPlayerSection) return null;
    return (
        <section className="player-section">
            {children}
        </section>
    )
}

export default PlayerSection;