import '../styles/App.css';
import Left from './Left';
import Right from './Right';
import Header from './Header';
import ControlPanel from './ControlPanel';
import ViewProvider from '../Hooks/view-hooks';
import PlayerProvider from '../Hooks/player-hooks';
import PlayerSection from './PlayerSection';

const App = () => {
  // const { showPlayerSection } = useViews();

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