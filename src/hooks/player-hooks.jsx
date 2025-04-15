/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const PlayerContext = createContext();
export const usePlayers = () => useContext(PlayerContext);

const PlayerProvider = ({ children }) => {
    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState({});

    const addPlayer = player => {
        setPlayers([
            ...players,
            player
        ])
    }

    const removePlayer = id => {
        setPlayers(players.filter(player => player.id !== id));
    }

    const changeCurrentPlayer = id => {
        setCurrentPlayer(players.filter(player => player.id === id));
    }

    return (
        <PlayerContext.Provider 
            value={{ 
                players, 
                addPlayer, 
                removePlayer,
                currentPlayer,
                changeCurrentPlayer  
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider;