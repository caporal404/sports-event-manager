import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/App.css';
import Layout from './Layout';
import DataProvider from '../hooks/data-hooks';
import PlayerSection from './PlayerSection';
import TeamSection from './TeamSection';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={
            <DataProvider name='teams'>
              <TeamSection />
            </DataProvider>
          }></Route>
          <Route path='players' element={
            <DataProvider name='players'>
              <PlayerSection />
            </DataProvider>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;