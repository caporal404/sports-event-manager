
export default function useLocalStorage (key, initialValue = null) {
    // Récuperation des données du localStorage
    const getSaved = () => {
        const data = localStorage.getItem(key);
        if (!data) localStorage.setItem(key, initialValue);
        console.log(`${key} successfully retrieved or created !`);
        return data ? JSON.parse(data) : initialValue;
    }
    
    // Enregistrement des données dans le localStorage
    const save = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`${key} successfully saved !`);
    }
    
    return {
        savedData: getSaved(), 
        save, 
        getSaved 
    }
}