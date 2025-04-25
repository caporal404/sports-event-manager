/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const PlayerContext = createContext();
export const usePlayers = () => useContext(PlayerContext);

const PlayerProvider = ({ children }) => {
    const { savedData, save } = useLocalStorage('players', []);
    
    const [players, setPlayers] = useState(savedData);
    let [modifiedPlayer, setModifiedPlayer] = useState(null);
    
    // Enregistrement automatique des joueurs en cas modification
    useEffect(() => save(players), [players]);
    

    const addPlayer = player => {
        player.id = players.length + 1;
        setPlayers([
            ...players,
            player
        ]);
    }

    const updatePlayer = updateData => {
        const newPlayers = players.map(player => player.id === updateData.id ? { ...updateData } : player);
        setPlayers(newPlayers);
        setModifiedPlayer(null);
        // console.log(modifiedPlayer);
    }

    const removePlayer = id => {
        setPlayers(players.filter(player => player.id !== id));
    }

    const clear = () => {
        setPlayers([]);
    }

    const goToNextSection = () => {
        document.querySelector('.current + .sub-section').classList.add('current');
        document.querySelector('.current').classList.remove('current');
    }
    
    const returnFromPreviousSection = () => {
        document.querySelector('.sub-section:has(+ .current)').classList.add('current');
        const elements = document.querySelectorAll('.current');
        elements[elements.length - 1].classList.remove('current');
    }

    return (
        <PlayerContext.Provider 
            value={{ 
                players, 
                addPlayer, 
                removePlayer,
                modifiedPlayer,
                setModifiedPlayer,
                updatePlayer,
                goToNextSection,
                returnFromPreviousSection
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerProvider;