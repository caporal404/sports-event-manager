/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const ViewContext = createContext();
export const useViews = () => useContext(ViewContext);

const ViewProvider = ({ children }) => {
    const [showPlayerSection, setShowPlayerSection] = useState(true);
    const [showTeamSection, setShowTeamSection] = useState(false);
    const [showEventSection, setShowEventSection] = useState(false);

    return (
        <ViewContext.Provider value={{
            showPlayerSection, 
            setShowPlayerSection,
            showTeamSection, 
            setShowTeamSection,
            showEventSection, 
            setShowEventSection
        }}>
            {children}
        </ViewContext.Provider>
    )
}

export default ViewProvider;