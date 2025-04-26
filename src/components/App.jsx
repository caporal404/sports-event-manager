import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {} from 'recharts'
import '../styles/App.css';
import PlayerSection from './PlayerSection';
import Layout from './Layout';
import PlayerProvider from '../hooks/player-hooks';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
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