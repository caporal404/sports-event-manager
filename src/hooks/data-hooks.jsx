/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const DataContext = createContext();
export const useData = () => useContext(DataContext);

const DataProvider = ({ children, name, initialValue = [] }) => {
  const { savedData, save } = useLocalStorage(name, initialValue);
  
  const [data, setData] = useState(savedData);
  let [modified, setModified] = useState(null);
  
  // Enregistrement automatique des données en cas modification
  useEffect(() => save(data), [data]);
  

  const add = obj => {
      obj.id = data.length + 1;
      setData([
          ...data,
          obj
      ]);
  }

  const update = updateObj => {
      const updateData = data.map(obj => obj.id === updateObj.id ? { ...updateObj } : obj);
      setData(updateData);
      setModified(null);
  }

  const remove = id => {
      setData(data.filter(obj => obj.id !== id));
  }

  const clear = () => {
      setData(initialValue);
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
      <DataContext.Provider 
          value={{ 
              data, 
              add, 
              remove,
              modified,
              setModified,
              update,
              goToNextSection,
              returnFromPreviousSection
      }}>
          {children}
      </DataContext.Provider>
  )
}

export default DataProvider;