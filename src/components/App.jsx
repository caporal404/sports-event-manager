import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/App.css';
import Layout from './Layout';
import PlayerProvider from '../hooks/player-hooks';
import PlayerSection from './PlayerSection';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={
            <PlayerProvider>
              <PlayerSection />
            </PlayerProvider>
          }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;