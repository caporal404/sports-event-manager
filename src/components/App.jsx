import {} from 'recharts'
import '../styles/App.css';
import Left from './Left';
import Right from './Right';
import Header from './Header';
import ControlPanel from './ControlPanel';
import ViewProvider from '../hooks/view-hooks';
import PlayerProvider from '../hooks/player-hooks';
import PlayerSection from './PlayerSection';

const App = () => {
  return (
    <div className='App'>
        <Left>
          <ViewProvider>
            <ControlPanel />
          </ViewProvider>
        </Left>
        <Right>
          <Header />
          <ViewProvider>
            <PlayerProvider>
              <PlayerSection />
            </PlayerProvider>
          </ViewProvider>
        </Right>
    </div>
  );
};

export default App;