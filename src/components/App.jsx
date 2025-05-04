import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import EventSection from './EventSection';
import TeamSection from './TeamSection';
import PlayerSection from './PlayerSection';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='events' element={<EventSection/>} />
          <Route path='teams' element={<TeamSection />} />
          <Route path='players' element={<PlayerSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;