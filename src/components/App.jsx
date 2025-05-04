import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/App.css';
import Layout from './Layout';
import TeamSection from './TeamSection';
import PlayerSection from './PlayerSection';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<TeamSection />}></Route>
          <Route path='players' element={<PlayerSection />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;